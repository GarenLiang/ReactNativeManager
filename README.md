# ReactNativeManager
* add the code in src/App.js componentWillMount
```javascript
componentWillMount() {
      const config = {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: ""
    };
    firebase.initializeApp(config);
  }

```
