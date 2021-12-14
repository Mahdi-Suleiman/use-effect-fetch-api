import React from 'react';
import ClassDataFetching from './componenets/ClassDataFetching';
import HooksDataFetching from './componenets/HooksDataFetching';
import HooksDataFetchingWithAButton from './componenets/HooksDataFetchingWithAButton';
import HooksDataFetchingWithInputField from './componenets/HooksDataFetchingWithInputField';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                {/* <ClassDataFetching /> */}
                {/* <HooksDataFetching /> */}
                {/* <HooksDataFetchingWithInputField /> */}
                {/* <HooksDataFetchingWithAButton /> */}
            </div>
        )
    }
}

export default App