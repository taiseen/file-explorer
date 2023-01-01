import Folder from "./components/Folder";
import explorer from "./constants/data.js";
import { useState } from 'react';
import useTraverseTree from "./hooks/useTraverseTree";


const App = () => {

    const { insertNode } = useTraverseTree();

    const [explorerData, setExplorerData] = useState(explorer);

    const handleFolderFileCreation = (folderID, item, isFolder) => {

        const finalTree = insertNode(explorerData, folderID, item, isFolder);

        setExplorerData(finalTree);
    }

    return (
        <main>
            <Folder
                explorerData={explorerData}
                handleFolderFileCreation={handleFolderFileCreation}
            />
        </main>
    );
};

export default App;