type ActionType = 'request' | 'setElement' | 'redirect' ;
type RequestType = 'post' | 'get';

export interface ButtonAction {
  type: ActionType;
  requestType: RequestType;
  uri: string;
  isAbsoluteUri: boolean;
  parameterToSet: Array<string>;
  elementName: string;
}

/*
-----------------------------------------------
|  actionType | parameter need to set          |
-----------------------------------------------|
| request     | requestType and uri            |
-----------------------------------------------|
| setElement  | elementName and parameterToSet |
-----------------------------------------------|
| redirect    | uri                            |
-----------------------------------------------|
 */
