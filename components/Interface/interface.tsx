interface Card {
    imgSrc:string;
    titleH2:string;
    paragrafo:string;
    alternativeText?:string;
}

interface Button {
    linkButon:string;
    textButton:string;
}

export type {Card, Button}