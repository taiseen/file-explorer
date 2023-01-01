import React, { useState } from 'react';

const Folder = ({ explorerData, handleFolderFileCreation }) => {
    const [isExpand, setIsExpand] = useState(false);
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: null,
    });


    const handelClick = (e, isFolder) => {
        e.stopPropagation();
        console.log(isFolder);

        setIsExpand(true);
        setShowInput({
            visible: true,
            isFolder: isFolder,
        })
    }

    const onCreateFolder = (e) => {

        if (e.keyCode === 13 && e.target.value) {

            handleFolderFileCreation(explorerData.id, e.target.value, showInput.isFolder);

            setShowInput(pre => ({ ...pre, visible: false }))
        }
    }


    if (explorerData.isFolder) {
        return (
            <section className='m-1 ml-4'>

                {/* User Click - Input  */}
                <div
                    onClick={() => setIsExpand(pre => !pre)}
                    className="flex justify-between items-center w-80 bg-gray-200 rounded p-1 pt-0 cursor-pointer"
                >
                    <span>📁 {explorerData.name}</span>

                    {/* Folder & File Buttons */}
                    <div className='flex items-center justify-between'>
                        <p
                            className='hover:bg-gray-400 duration-300 rounded mt-1'
                            onClick={(e) => handelClick(e, true)}
                        >
                            📁
                        </p>
                        <p
                            className='hover:bg-gray-400 duration-300 rounded mt-1'
                            onClick={(e) => handelClick(e, false)}
                        >
                            📄
                        </p>
                    </div>
                </div>

                {/* User Click - Output Effect */}
                <div style={{ "display": isExpand ? "block" : "none" }}>
                    {
                        showInput.visible && (
                            <div className='ml-5'>
                                <span>{showInput.isFolder ? '📁' : '📄'}</span>
                                <input
                                    autoFocus
                                    type="text"
                                    className='outline-0 border border-gray-300 rounded mt-1 px-1 pt-0'
                                    // clicking outside then close it...
                                    onBlur={() => setShowInput(pre => ({ ...pre, visible: false }))}
                                    onKeyDown={(e) => onCreateFolder(e)}
                                    // onChange={(e) => onCreateFolder(e)}
                                />
                            </div>
                        )
                    }
                    {
                        explorerData.items.map(item => {
                            return (
                                // Recursive function call for printing all children...
                                <Folder key={item.id} explorerData={item} />
                            )
                        })
                    }
                </div>
            </section>
        );
    }
    else {
        return <span className='pl-4 flex flex-col mt-1'>📄{explorerData.name}</span>
    };
};

export default Folder;