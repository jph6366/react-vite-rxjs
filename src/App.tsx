import { Suspense } from 'react'
import { interval } from 'rxjs'
import { map } from 'rxjs/operators'
import { useAtom } from 'jotai';
import { atomWithObservable } from 'jotai/utils';
import reactLogo from './assets/react.svg'
import jotaiMascot from './assets/jotai-mascot.png'
import rxjsLogo from './assets/rxjs.svg'
import viteLogo from '/vite.svg'
import bpLogo from '/blueprint.svg'
import './App.css'

const counterSubject = interval(1000).pipe(map((i) => `#${i}`));

const counterAtom = atomWithObservable(() => 
counterSubject)


function App() {

    const [count] = useAtom(counterAtom)

    return (
            <div className='App' bp-layout="block gap:md center align:block-stretch">
                <bp-card>
                    <a href="https://blueprintui.dev/" target="_blank">
                        <img src={bpLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://jotai.org/" target="_blank">
                        <img src={jotaiMascot} className="logo" alt="React logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo" alt="React logo" />
                    </a>
                    <a href="https://vite.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://rxjs.dev/" target="_blank">
                        <img src={rxjsLogo} className="logo" alt="React logo" />
                    </a>

                </bp-card>
                <div bp-layout="inline gap:xs inline:center">
                    <bp-tag status="accent">BlueprintUI</bp-tag>+
                    <bp-tag>Jotai</bp-tag>+
                    <bp-tag status="warning">React</bp-tag>+
                    <bp-tag status="danger">RxJS</bp-tag>+
                    <bp-tag status="success">Vite</bp-tag>
                </div>
                <div >
                    <Suspense fallback="Loading...">
                        <bp-button >count is {count}</bp-button>
                    </Suspense>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">Click on the Blueprint, Vite, and React logos to learn more</p>
            </div>
    )
}

export default App
