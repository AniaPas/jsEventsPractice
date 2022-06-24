
/*Task 1: write a function that will create any html element, where parameterer 1 will be the tag type, 2 - class, 3- text.*/
function createTag(nazwaTag, nazwaClass, text) {
    class Htmlelement{
        constructor(nazwaTag, nazwaClass, text) {
            this.nazwaTag = nazwaTag;
            this.nazwaClass =nazwaClass;
            this.text = text;
            this.show = function showme () {
                console.log(`Oto nowy obiekt, który zmienimy na html, czyli tag ${this.nazwaTag} o klasie ${this.nazwaClass} z tekstem ${this.text}`)
            }
    
    
        }
    
    } 
    const myelement= new Htmlelement(nazwaTag, nazwaClass, text)
    const myHtmlElement= document.createElement(nazwaTag)
    myHtmlElement.innerText= text
    myHtmlElement.setAttribute('class', nazwaClass)
    return myHtmlElement
    }
    
    const zobaczymyCzyWyjdzie = createTag('h1',  'los', 'kos')
    console.log(createTag('h1', 'lalala', 'ania'), 'wydzieOrNot')

