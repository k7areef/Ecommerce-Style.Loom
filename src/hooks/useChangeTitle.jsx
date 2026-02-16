import React from 'react';
function useChangeTitle(title = "Style.Loom - Home") {
    React.useEffect(() => {
        window.document.title = "Style.Loom - " + title;
    }, [title]);
    return null;
};
export default useChangeTitle;