import React, { Component } from 'react';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-course__title">Problem Solving</label>

                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit nulla ac tincidunt ultrices. Nulla placerat neque est, nec dapibus augue mollis porta. Nunc sollicitudin accumsan laoreet. Vivamus posuere eleifend dui eu facilisis.</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;