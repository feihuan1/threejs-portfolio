# Help Needed

this error shows up in console when loads in dev mode, i've been googleing and youtube search for days but still can't find a solution, i will be much apprecialted if someone can help me

app runs fine , tying to figure out where can i deploy the app, seems like render.com github and firebase deploy wont load the 3D objects

THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values. _BufferGeometry {isBufferGeometry: true, uuid: 'bf31fd17-adeb-4611-aeb6-ae317ee33d9f', name: '', type: 'BufferGeometry', index: null, …} 
    at Frustum.intersectsObject (http://localhost:5173/node_modules/.vite/deps/chunk-45ANACZD.js?v=31d9cd19:8524:18)
    at Suspense
    at ErrorBoundary (http://localhost:5173/node_modules/.vite/deps/chunk-N222EQID.js?v=31d9cd19:16596:5)
    at FiberProvider (http://localhost:5173/node_modules/.vite/deps/chunk-N222EQID.js?v=31d9cd19:18345:21)
    at Frustum.intersectsObject (http://localhost:5173/node_modules/.vite/deps/chunk-45ANACZD.js?v=31d9cd19:8524:18)



live demo: https://sprightly-kashata-50cc9e.netlify.app/