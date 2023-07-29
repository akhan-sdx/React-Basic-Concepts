import ErrorBoundary from './ErrorBoundary';
import MyComponent from "./IntroductionToReactComponent"; 

const ElementWithErrorBoundary = () => {

    return(
        <ErrorBoundary>
            <MyComponent/>
        </ErrorBoundary>
    )
}

export default ElementWithErrorBoundary;