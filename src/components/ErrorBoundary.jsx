import { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      console.log(error);
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
        console.log(error);
        console.log(errorInfo);
      // You can also log the error to an error reporting service
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong. from the error boundary</h1>;
      }
  

      // eslint-disable-next-line react/prop-types
      return this.props.children;
    }
  }
export default ErrorBoundary