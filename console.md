react-dom_client.js?v=b7a9ed2d:21609 Download the React DevTools for a better development experience: https://reactjs.org/link/react-devtools
firebase.js:21 [2025-06-14T18:16:10.643Z]  @firebase/firestore: Firestore (11.9.0): enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.
defaultLogHandler @ chunk-BL7CDIX5.js?v=b7a9ed2d:1206
warn @ chunk-BL7CDIX5.js?v=b7a9ed2d:1270
__PRIVATE_logWarn @ firebase_firestore.js?v=b7a9ed2d:2632
enableIndexedDbPersistence @ firebase_firestore.js?v=b7a9ed2d:16164
(anonymous) @ firebase.js:21
App.jsx:33 Uncaught ReferenceError: Cannot access 'addToCart' before initialization
    at FoodTracker (App.jsx:33:52)
    at renderWithHooks (react-dom_client.js?v=b7a9ed2d:11596:26)
    at mountIndeterminateComponent (react-dom_client.js?v=b7a9ed2d:14974:21)
    at beginWork (react-dom_client.js?v=b7a9ed2d:15962:22)
    at HTMLUnknownElement.callCallback2 (react-dom_client.js?v=b7a9ed2d:3680:22)
    at Object.invokeGuardedCallbackDev (react-dom_client.js?v=b7a9ed2d:3705:24)
    at invokeGuardedCallback (react-dom_client.js?v=b7a9ed2d:3739:39)
    at beginWork$1 (react-dom_client.js?v=b7a9ed2d:19818:15)
    at performUnitOfWork (react-dom_client.js?v=b7a9ed2d:19254:20)
    at workLoopSync (react-dom_client.js?v=b7a9ed2d:19190:13)
FoodTracker @ App.jsx:33
renderWithHooks @ react-dom_client.js?v=b7a9ed2d:11596
mountIndeterminateComponent @ react-dom_client.js?v=b7a9ed2d:14974
beginWork @ react-dom_client.js?v=b7a9ed2d:15962
callCallback2 @ react-dom_client.js?v=b7a9ed2d:3680
invokeGuardedCallbackDev @ react-dom_client.js?v=b7a9ed2d:3705
invokeGuardedCallback @ react-dom_client.js?v=b7a9ed2d:3739
beginWork$1 @ react-dom_client.js?v=b7a9ed2d:19818
performUnitOfWork @ react-dom_client.js?v=b7a9ed2d:19254
workLoopSync @ react-dom_client.js?v=b7a9ed2d:19190
renderRootSync @ react-dom_client.js?v=b7a9ed2d:19169
performConcurrentWorkOnRoot @ react-dom_client.js?v=b7a9ed2d:18728
workLoop @ react-dom_client.js?v=b7a9ed2d:197
flushWork @ react-dom_client.js?v=b7a9ed2d:176
performWorkUntilDeadline @ react-dom_client.js?v=b7a9ed2d:384
App.jsx:33 Uncaught ReferenceError: Cannot access 'addToCart' before initialization
    at FoodTracker (App.jsx:33:52)
    at renderWithHooks (react-dom_client.js?v=b7a9ed2d:11596:26)
    at mountIndeterminateComponent (react-dom_client.js?v=b7a9ed2d:14974:21)
    at beginWork (react-dom_client.js?v=b7a9ed2d:15962:22)
    at HTMLUnknownElement.callCallback2 (react-dom_client.js?v=b7a9ed2d:3680:22)
    at Object.invokeGuardedCallbackDev (react-dom_client.js?v=b7a9ed2d:3705:24)
    at invokeGuardedCallback (react-dom_client.js?v=b7a9ed2d:3739:39)
    at beginWork$1 (react-dom_client.js?v=b7a9ed2d:19818:15)
    at performUnitOfWork (react-dom_client.js?v=b7a9ed2d:19254:20)
    at workLoopSync (react-dom_client.js?v=b7a9ed2d:19190:13)
FoodTracker @ App.jsx:33
renderWithHooks @ react-dom_client.js?v=b7a9ed2d:11596
mountIndeterminateComponent @ react-dom_client.js?v=b7a9ed2d:14974
beginWork @ react-dom_client.js?v=b7a9ed2d:15962
callCallback2 @ react-dom_client.js?v=b7a9ed2d:3680
invokeGuardedCallbackDev @ react-dom_client.js?v=b7a9ed2d:3705
invokeGuardedCallback @ react-dom_client.js?v=b7a9ed2d:3739
beginWork$1 @ react-dom_client.js?v=b7a9ed2d:19818
performUnitOfWork @ react-dom_client.js?v=b7a9ed2d:19254
workLoopSync @ react-dom_client.js?v=b7a9ed2d:19190
renderRootSync @ react-dom_client.js?v=b7a9ed2d:19169
recoverFromConcurrentError @ react-dom_client.js?v=b7a9ed2d:18786
performConcurrentWorkOnRoot @ react-dom_client.js?v=b7a9ed2d:18734
workLoop @ react-dom_client.js?v=b7a9ed2d:197
flushWork @ react-dom_client.js?v=b7a9ed2d:176
performWorkUntilDeadline @ react-dom_client.js?v=b7a9ed2d:384
react-dom_client.js?v=b7a9ed2d:14080 The above error occurred in the <FoodTracker> component:

    at FoodTracker (http://localhost:5173/src/App.jsx:17:35)

Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.
logCapturedError @ react-dom_client.js?v=b7a9ed2d:14080
update.callback @ react-dom_client.js?v=b7a9ed2d:14100
callCallback @ react-dom_client.js?v=b7a9ed2d:11296
commitUpdateQueue @ react-dom_client.js?v=b7a9ed2d:11313
commitLayoutEffectOnFiber @ react-dom_client.js?v=b7a9ed2d:17141
commitLayoutMountEffects_complete @ react-dom_client.js?v=b7a9ed2d:18030
commitLayoutEffects_begin @ react-dom_client.js?v=b7a9ed2d:18019
commitLayoutEffects @ react-dom_client.js?v=b7a9ed2d:17970
commitRootImpl @ react-dom_client.js?v=b7a9ed2d:19406
commitRoot @ react-dom_client.js?v=b7a9ed2d:19330
finishConcurrentRender @ react-dom_client.js?v=b7a9ed2d:18813
performConcurrentWorkOnRoot @ react-dom_client.js?v=b7a9ed2d:18768
workLoop @ react-dom_client.js?v=b7a9ed2d:197
flushWork @ react-dom_client.js?v=b7a9ed2d:176
performWorkUntilDeadline @ react-dom_client.js?v=b7a9ed2d:384
react-dom_client.js?v=b7a9ed2d:19466 Uncaught ReferenceError: Cannot access 'addToCart' before initialization
    at FoodTracker (App.jsx:33:52)
    at renderWithHooks (react-dom_client.js?v=b7a9ed2d:11596:26)
    at mountIndeterminateComponent (react-dom_client.js?v=b7a9ed2d:14974:21)
    at beginWork (react-dom_client.js?v=b7a9ed2d:15962:22)
    at beginWork$1 (react-dom_client.js?v=b7a9ed2d:19806:22)
    at performUnitOfWork (react-dom_client.js?v=b7a9ed2d:19254:20)
    at workLoopSync (react-dom_client.js?v=b7a9ed2d:19190:13)
    at renderRootSync (react-dom_client.js?v=b7a9ed2d:19169:15)
    at recoverFromConcurrentError (react-dom_client.js?v=b7a9ed2d:18786:28)
    at performConcurrentWorkOnRoot (react-dom_client.js?v=b7a9ed2d:18734:30)
FoodTracker @ App.jsx:33
renderWithHooks @ react-dom_client.js?v=b7a9ed2d:11596
mountIndeterminateComponent @ react-dom_client.js?v=b7a9ed2d:14974
beginWork @ react-dom_client.js?v=b7a9ed2d:15962
beginWork$1 @ react-dom_client.js?v=b7a9ed2d:19806
performUnitOfWork @ react-dom_client.js?v=b7a9ed2d:19254
workLoopSync @ react-dom_client.js?v=b7a9ed2d:19190
renderRootSync @ react-dom_client.js?v=b7a9ed2d:19169
recoverFromConcurrentError @ react-dom_client.js?v=b7a9ed2d:18786
performConcurrentWorkOnRoot @ react-dom_client.js?v=b7a9ed2d:18734
workLoop @ react-dom_client.js?v=b7a9ed2d:197
flushWork @ react-dom_client.js?v=b7a9ed2d:176
performWorkUntilDeadline @ react-dom_client.js?v=b7a9ed2d:384
