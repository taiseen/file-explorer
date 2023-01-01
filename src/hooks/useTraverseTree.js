const useTraverseTree = () => {

    const insertNode = (tree, folderID, item, isFolder) => {

        if (tree.id === folderID && tree.isFolder) {
            tree.items.unshift({
                id: new Date().getTime(),
                name: item,
                isFolder,
                items: []
            })

            // tree.isFolder
            //     ? tree.items.unshift({
            //         id: new Date().getTime(),
            //         name: item,
            //         isFolder,
            //         items: []
            //     })
            //     : tree.items.push({
            //         id: new Date().getTime(),
            //         name: item,
            //         isFolder,
            //         items: []
            //     })


            return tree;
        }
    }

    return { insertNode };
};

export default useTraverseTree;