import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true
    };
  }
  render() {
    if (this.state.hasError) {
      return <h4>Something went wrong</h4>;
    }
    return <div>{this.props.children}</div>;
  }
}

export default ErrorBoundary;
