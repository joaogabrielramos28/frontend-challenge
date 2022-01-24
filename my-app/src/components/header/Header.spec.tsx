import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Header from './index'


describe('Header Component',()=>{
    it('Should be able to render logo',()=>{
        render(<Header />)

        expect(screen.getByAltText('Logo')).toBeInTheDocument()
    })
})

