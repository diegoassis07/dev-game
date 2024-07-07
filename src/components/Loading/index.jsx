import * as Native from 'react-native';
import React from 'react';

export const Loading = () => {
  return (
    <Native.View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Native.Image
        resizeMode="contain"
        style={{ height: 100, width: 100 }}
        source={{
          uri: 'https://i.gifer.com/yy3.gif',
        }}
      />
    </Native.View>
  );
};

