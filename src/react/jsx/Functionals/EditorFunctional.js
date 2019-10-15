import React from 'react';
import Editor from 'draft-js-plugins-editor';
import createToolbarPlugin from 'draft-js-static-toolbar-plugin';

const DraftEditor = props => {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  return (
    <Editor
      placeholder={"Write something..."}
      editorState={editorState}
      onChange={() => setEditorState(EditorState)}
    />
  );
};

export default DraftEditor;
