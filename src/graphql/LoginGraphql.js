import { gql } from "apollo-boost";
import { Query } from "@apollo/react-components";

export const SIGN_IN = gql`
  query Authentication($employee: Employee!) {
    signIn(Employee: $employee) {
      Message
      IsCompleted
    }
  }
`;

export const Employee = {
  employee: {
    Username: "John",
    Password: "Francis"
  }
};

export const SIGNIN = ({ Employee }) => {
  <Query query={SIGN_IN} variables={Employee}></Query>;
};

