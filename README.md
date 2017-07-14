# ReactNativeManager
* add the firebase code in src/App.js componentWillMount :yum:
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
