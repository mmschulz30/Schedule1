import React, { Component } from 'react';

import Icon from '../icon';
import Arrow from '../arrow';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <div classNmae="library-course__title-check">
                    <label className="library-course__title">Problem Solving</label>
                    {Icon('fas fa-check', 'library-course__icon')}
                </div>
                <Arrow className="library-course__arrow" />
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit nulla ac tincidunt ultrices. Nulla placerat neque est, nec dapibus augue mollis porta. Nunc sollicitudin accumsan laoreet. Vivamus posuere eleifend dui eu facilisis.</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;