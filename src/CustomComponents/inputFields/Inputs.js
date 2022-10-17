
import React, {  } from 'react';
import { TextInput } from 'react-native';
import RegisterStyle from '../../Screens/Register/style';
const Inputs=(props)=>{
   
return(
<TextInput style={[RegisterStyle.Textinput,props.style]}
    value={props.value}
    backgroundColor={props.backgroundColor}
    placeholder={props.placeholder}
    keyboardType={props.keyboardType}
    onChangeText={props.onchangeText}
    placeholderTextColor={props.placeholderTextColor}
    onBlur={props.onBlur}
   />

)
}
export default Inputs