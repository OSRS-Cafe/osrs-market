import { StrictMode } from 'react';
import {createRoot, type Root} from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import {BrowserRouter} from "react-router";

const rootElement: HTMLElement | null = document.getElementById('root');
if(!rootElement) throw Error("React Root Element not found");

const reactRoot: Root = createRoot(rootElement);
reactRoot.render(
	<StrictMode>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</StrictMode>
);
