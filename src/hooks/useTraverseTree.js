const useTraverseTree = () => {

    const insertNode = (tree, folderID, item, isFolder) => {

        if (tree.id === folderID) {
           
            isFolder
                ? tree.items.unshift({
                    id: new Date().getTime(),
                    name: item,
                    isFolder,
                    items: []
                })
                : tree.items.push({
                    id: new Date().getTime(),
                    name: item,
                    isFolder,
                    items: []
                })

            return tree;
        }

        // Depth First Search | DFS Algorithm use here...
        const latestNode = tree.items.map(subTree => insertNode(subTree, folderID, item, isFolder));

        return { ...tree, items: latestNode };
    }

    const deleteNode = () => { };
    const updateNode = () => { };

    return { insertNode, deleteNode, updateNode };
};

export default useTraverseTree;