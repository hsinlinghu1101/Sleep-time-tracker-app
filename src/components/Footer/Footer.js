import React from 'react'


export default function Footer(){
    let currentDate =new Date()
    let currentYear = currentDate.getFullYear()

    return (
    <footer>© {currentYear} Hsin Ling Hu</footer>
    )
}