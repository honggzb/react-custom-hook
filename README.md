## setup

1. `npm create vite@latest`
2. `npm install`
3. `npm run dev`
4. Open http://localhost:5173/ to view it in the browser

## custom hooks

1. define a component, such as 'hooks/useMouseCoordinates.jsx'  <== custom hook
   1. use `useState` and `useEffect`
   2. return hooks name
2. than can use this custom hook in other component

```javascript
// 1. hooks/useMouseCoordinates.jsx
import { useEffect, useState } from "react";
export function useMouseCoordinates(defaultValue) {
  const [mouseCoordinates, setMouseCoordinates] = useState(
    defaultValue || { x: null, y: null }
  );
  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      setMouseCoordinates({ x: event.x, y: event.y });
    });
  }, []);
  return { mouseCoordinates };   // return hook name
}
// 2. using in component
import { useMouseCoordinates } from "./hooks/useMouseCoordinates";
function OtherComponent() {
  const mouseCoordinates = useMouseCoordinates();  
  return (<div style={{ height: 100, width: 100, backgroundColor: mouseCoordinates.x > 66 ? "blue" : "red" }} />
  )
}
```

- https://picsum.photos/
