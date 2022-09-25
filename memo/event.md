react에서는 state를 직접 수정하면 안된다.

<br>

habits component의 코드를 보면 다음과 같은 부분이 있다.

```
  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
```

이는 다음과 같은 코드로도 작성할 수 있다.

```
  render() {
    return (
      <li className="habit">
        <span className="habit-name">{this.props.habit.name}</span>
        <span className="habit-count">{this.props.habit.count}</span>
```

배열을 복사할 때 [...]를 사용한다. 이는 state의 habits 배열을 복사하는 것이다.

```
  예시
  const habits = [...this.state.habits];
```

배열을 삭제할 때 filer() 함수를 사용하여 괄호 안에 조건을 넣어서 참인 것만 새로운 배열로 반환한다.

```
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
```
