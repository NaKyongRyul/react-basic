## JSX 정리

```
return React.createElement("h1", {}, "Hello");
return <h1>Hello</h1>;
```

두 문장은 같다. 첫 문장과 같이 자바스크립트처럼 작성하는 것은 어렵고 번거로우므로 <></> 같이 jsx를 사용해서 html처럼 사용한다.

### HTML, JSX 차이점

#### HTML

```
<h1 class="title" onclick="">마크업 언어
</h1>
```

#### JSX

```
<h1 className="title" onClick="">자바스크립트 코드(를 작성 가능하다.)
</h1>
```

다수의 태그들을 return 할 수 없기 때문에 형제 노드가 있는 경우에는 묶어 줘야 한다. -> div는 console의 element창에서 표시되지만 <>나 <React.Fragment>는 표시되지 않으므로 불필요한 요소를 줄일 수 있다.
