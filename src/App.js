import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { VariableProvider } from './components/Context/VariableContext';
import Editor from './components/Editor';

export default function App() {

    return (
        <VariableProvider>
            <HashRouter>
                <Routes >
                    <Route path="/*" element={<Home />} />
                    <Route path="/editor" element={<Editor />} />
                </Routes>
            </HashRouter>
        </VariableProvider>
    )
}
