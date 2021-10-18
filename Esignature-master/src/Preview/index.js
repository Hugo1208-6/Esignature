export const Preview = ({files}) => {
    if (!files.legnth){
       return null 
    };
    return files.map((file)=> <img src={file.filename} alt={file.originalname}/>)
}