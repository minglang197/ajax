// const { builtinModules } = require("module");

hhh.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "./style.css")
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)

            } else {
                alert("style.css加载失败")
            }
        }
    }
    request.send();
}
btn.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "./test.js")
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const script = document.createElement('script')
                script.innerHTML = request.response
                document.body.appendChild(script)
            } else {
                alert("test.js加载失败")
            }
        }
    }
    request.send();
}
newHtml.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "./new.html")
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const div = document.createElement('div')
                div.innerHTML = request.response
                document.body.appendChild(div)
            } else {
                alert("html加载失败")
            }
        }
    }
    request.send();
}
xml.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "./demo.xml")
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const dom = request.responseXML;
                const text = dom.getElementsByTagName('warning')[0].textContent
                alert(text)
            } else {
                alert("xml加载失败")
            }
        }
    }
    request.send();
}
getJson.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "./1.json")
    request.onreadystatechange = () => {
        console.log(request.response);
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const obj = JSON.parse(request.response)
                alert('我是json')
            }
        }
    };
    request.send();
};
let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", `/page${n+1}.json`)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const array = JSON.parse(request.response)
                array.forEach(item => {
                    const li = document.createElement('li')
                    li.textContent = item.id;
                    xxx.appendChild(li);
                })
                n += 1;
            }
        }
    };
    request.send();
};
