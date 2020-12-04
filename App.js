import { Button, TouchableOpacity, View, Text, PermissionsAndroid } from 'react-native'
import React, { useState } from 'react'
import { RNScanCode } from 'react-native-scan-code-cn'
import { checkPermission } from './src/permission'
import { PERMISSIONS } from 'react-native-permissions'
import { Button_Teaset } from './src/demo1'

const App = () => {
  const [scan, setScan] = useState(false)

  return (
    scan ? <Button_Teaset /> : <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title={'扫码'} onPress={async () => {
        const permission = Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA
        const res = await checkPermission(permission)
        if (res) {
          setScan(true)
        } else {
          console.log('没权限');
        }
      }} />
    </View>
  )
}

export default App