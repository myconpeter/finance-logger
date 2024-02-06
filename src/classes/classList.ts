import { hasFomatter } from "../interfaces/hasFomatter.js";


export class listTemplate {
    constructor(private container: HTMLUListElement) { }
    render(item: hasFomatter, heading: string, pos: 'start' | 'end') {
        const li = document.createElement('li')
        const article = document.createElement('article')

        const h2 = document.createElement('h2')
        h2.innerText = heading

        const p = document.createElement('p')

        article.append(h2)
        article.append(p)

        p.innerText = item.format()

        li.append(article)

        if (pos === 'start') {
            this.container.prepend(li)

        }
        else {
            this.container.append(li)
        }
    }
}