// it is a Tree Data Structure...

const explorer = {
    id: "1",
    name: "root",
    isFolder: true,
    items: [
        {
            id: "2",
            name: "public",
            isFolder: true,
            items: [
                {
                    id: "11",
                    name: "index.html",
                    isFolder: false,
                    items: []
                },
            ]
        },
        {
            id: "7",
            name: "src",
            isFolder: true,
            items: [
                {
                    id:"3",
                    name: "components",
                    isFolder: true,
                    items: [
                        {
                            id:"4",
                            name: "Header.jsx",
                            isFolder: false,
                            items: []
                        },
                        {
                            id:"5",
                            name: "Footer.jsx",
                            isFolder: false,
                            items: []
                        }
                    ]
                },
                {
                    id: "8",
                    name: "App.js",
                    isFolder: false,
                    items: []
                },
                {
                    id: "9",
                    name: "index.js",
                    isFolder: false,
                    items: []
                },
                {
                    id: "10",
                    name: "styles.css",
                    isFolder: false,
                    items: []
                }
            ]
        },
        {
            id: "11",
            name: "package.json",
            isFolder: false,
            items: []
        }
    ]
};

export default explorer;