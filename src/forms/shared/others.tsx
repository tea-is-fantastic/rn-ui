// import React from 'react';
// import { KeyboardAvoidingView, Text, ViewStyle } from 'react-native';
//
// export const CreateInput: React.FC<IThemedInput & ICustomTextInput> = ({
//   forwardedRef,
//   inline,
//   ...props
// }) => {
//   let style: ViewStyle = { flex: 2 };
//   if (inline) {
//     style = {
//       flex: 2,
//       paddingHorizontal: 5,
//       marginVertical: -10,
//       width: '100%',
//     };
//   }
//   return (
//     <KeyboardAvoidingView style={style} behavior="height">
//       <AltInput {...props} ref={forwardedRef} />
//     </KeyboardAvoidingView>
//   );
// };
//
// export const CreateSelect: React.FC<IThemedInput & ICustomSelectInput> = ({
//   forwardedRef,
//   ...props
// }) => {
//   return (
//     <ThemedSelectDialog
//       {...props}
//       ref={forwardedRef}
//       renderChildren={(value) => {
//         return <Text>{value}</Text>;
//       }}
//     />
//   );
// };
