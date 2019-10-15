import React, { Component } from "react";
import { AtomicBlockUtils, convertFromRaw, EditorState } from "draft-js";
import Editor, {
  createEditorStateWithText,
  composeDecorators
} from "draft-js-plugins-editor";
import createToolbarPlugin, { Separator } from "draft-js-static-toolbar-plugin";
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
  AlignBlockCenterButton,
  AlignBlockLeftButton,
  AlignBlockRightButton
} from "draft-js-buttons";
import createImagePlugin from "draft-js-image-plugin";
import createAlignmentPlugin from "draft-js-alignment-plugin";
import createFocusPlugin from "draft-js-focus-plugin";
import createBlockDndPlugin from "draft-js-drag-n-drop-plugin";
import createResizeablePlugin from "draft-js-resizeable-plugin";
import createUndoPlugin from "draft-js-undo-plugin";
import "draft-js-undo-plugin/lib/plugin.css";
import style from "../../css/EditorComponent.css";
import PictureIcon from "../../assets/Picture.svg";

const focusPlugin = createFocusPlugin();
const resizeablePlugin = createResizeablePlugin();
const blockDndPlugin = createBlockDndPlugin();
const alignmentPlugin = createAlignmentPlugin();
const staticToolbarPlugin = createToolbarPlugin();
const undoPlugin = createUndoPlugin();

const decorator = composeDecorators(
  resizeablePlugin.decorator,
  alignmentPlugin.decorator,
  focusPlugin.decorator,
  blockDndPlugin.decorator
);

const imagePlugin = createImagePlugin({ decorator });

/*const dragNDropFileUploadPlugin = createDragNDropUploadPlugin({
  handleUpload: mockUpload,
  addImage: imagePlugin.addImage
});*/

const { Toolbar } = staticToolbarPlugin;
const { UndoButton, RedoButton } = undoPlugin;
const { AlignmentTool } = alignmentPlugin;

const plugins = [
  staticToolbarPlugin,
  imagePlugin,
  blockDndPlugin,
  focusPlugin,
  alignmentPlugin,
  resizeablePlugin
];

const initialState = {
  entityMap: {},
  blocks: [
    {
      key: "9gm3s",
      text: "",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    }
  ]
};

class HeadlinesPicker extends Component {
  componentDidMount() {
    setTimeout(() => {
      window.addEventListener("click", this.onWindowClick);
    });
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.onWindowClick);
  }

  onWindowClick = () =>
    // Call `onOverrideContent` again with `undefined`
    // so the toolbar can show its regular content again.
    this.props.onOverrideContent(undefined);

  render() {
    const buttons = [HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton];
    return (
      <div>
        {buttons.map((
          Button,
          i // eslint-disable-next-line
        ) => (
          <Button key={i} {...this.props} />
        ))}
      </div>
    );
  }
}

class HeadlinesButton extends Component {
  onClick = () =>
    // A button can call `onOverrideContent` to replace the content
    // of the toolbar. This can be useful for displaying sub
    // menus or requesting additional information from the user.
    this.props.onOverrideContent(HeadlinesPicker);

  render() {
    return (
      <div className={style.headlineButtonWrapper}>
        <button onClick={this.onClick} className={style.headlineButton}>
          H
        </button>
      </div>
    );
  }
}

class MyEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createWithContent(convertFromRaw(initialState))
    };

    this.onChange = editorState => this.setState({ editorState });
    this.onChangeFile = this.onChangeFile.bind(this);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.onClickFile = this.onClickFile.bind(this);
    this.refUpload = React.createRef();
  }

  onClickFile() {
    this.refUpload.current.click();
  }

  onChangeFile(event) {
    event.stopPropagation();
    event.preventDefault();

    const file = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64 = reader.result;
      const newEditorState = this.insertImage(this.state.editorState, base64);

      this.setState({ editorState: newEditorState });
    };
  }

  onFocus = () => {
    this.editor.focus();
  };

  insertImage = (editorState, base64) => {
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      "image",
      "IMMUTABLE",
      { src: base64 }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity
    });
    return AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, " ");
  };

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      this.onChange(newState);
    }
  }

  onUnderlineClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE")
    );
  };

  onBoldClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
  };

  onItalicClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
    );
  };

  render() {
    return (
      <div className={style.divEditContainer} onClick={this.onFocus}>
        {/*<div className={style.divToolBar}>
          <div onClick={this.onUnderlineClick}>U</div>
          <div onClick={this.onBoldClick}>
            <b>B</b>
          </div>
          <div onClick={this.onItalicClick}>
            <em>I</em>
          </div>
          <UndoButton />
          <RedoButton />
        </div>
        <Editor
          placeholder={"Write something here..."}
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
          plugins={plugins}
        />*/}
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
          ref={element => {
            this.editor = element;
          }}
        />
        <Toolbar>
          {// may be use React.Fragment instead of div to improve perfomance after React 16
          externalProps => (
            <div>
              <BoldButton {...externalProps} />
              <ItalicButton {...externalProps} />
              <UnderlineButton {...externalProps} />
              <CodeButton {...externalProps} />
              <Separator {...externalProps} />
              <HeadlinesButton {...externalProps} />
              <UnorderedListButton {...externalProps} />
              <OrderedListButton {...externalProps} />
              <BlockquoteButton {...externalProps} />
              <CodeBlockButton {...externalProps} />
              {/*<AlignBlockLeftButton {...externalProps} />
              <AlignBlockCenterButton {...externalProps} />
              <AlignBlockRightButton {...externalProps} />*/}
              <div className={style.divUploadImg}>
                {
                  <label>
                    <img src={PictureIcon} onClick={() => this.onClickFile()} />
                  </label>
                }
                <input
                  type="file"
                  accept="image/*"
                  onChange={event => this.onChangeFile(event)}
                  ref={this.refUpload}
                />
              </div>
            </div>
          )}
        </Toolbar>
      </div>
    );
  }
}

export default MyEditor;
