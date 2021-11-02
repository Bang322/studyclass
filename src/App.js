import React, {Component} from 'react';
import Counter from "./Counter";

class App extends Component {
    /*// static 키워드와 함께 클래스 내부에 defaultProps 를 선언할 수 있다.
    static defaultProps = {
        age : 20
    }*/

    state = {
        number : 0
    };

    // 해당 컴포넌트의 렌더링이 끝나고 실행됨 (render 가 종료된 뒤 호출됨)
    componentDidMount() {
        console.log('App 컴포넌트 렌더링 끝');
    }

    handleIncrement = () => {
        this.setState({
            number : this.state.number + 1
        });
    };

    // setState 도 다음과 같이 함수형 업데이트를 할 수 있다.
    handleDecrement = () => {
        this.setState(state => ({
            number : state.number - 1
        }));
    }

    render() {
        return (
            <div className="container">
                <Counter
                    number={ this.state.number }
                    handleIncrement={ this.handleIncrement }
                    handleDecrement={ this.handleDecrement }
                />
            </div>
        );
    }
}

/*// defaultProps 를 선언
App.defaultProps = {
    name : 'bang'
}*/

export default App;