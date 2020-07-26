import React,{Component} from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export class TextArea extends Component {
    render() {
        return (
            <div>
                <TextareaAutosize
                     rowsMax={6}
                     aria-label="maximum height"
                    placeholder="Maximum 6 rows"
                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua."
/>
            </div>
        )
    }
}

export default TextArea
