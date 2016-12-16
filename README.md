
RAWselector
==========

RAWselector - is a nodejs script for photography to delect the RAWphoto that they don't want, base on the JPG which they choose to reserve。

RAWselector是一个nodejs程序，为了便于摄影师在拍摄结束删选照片时只需要浏览JPG格式的照片并删除废片，之后使用此程序会自动删除不需要的RAW格式照片。


#How to use 
 Install nodejs in your compurter. 

 在电脑里安装nodejs。 

 [Node.js](https://nodejs.org/en/)


##run

 Copy all the photo into 'photo' directory include JPG and RAW. 
 
 将所有照片拷贝到‘photo’文件夹，包括JPG格式和RAW格式。
 
 open the Command at this path and run the script by input.

 在当前文件夹打开命令行，输入以下命令。
 >parameter1 is the type of the file that you choose and delect photo， such as 'JPG'、'JPEG'.
 
 >parameter1是你用于浏览删选的格式，列如'JPG'、'JPEG'。
 
 >parameter2 is the type of the RAW photo,such as 'CR2'(for Canon camera)、'ARW'（for Sony camera）.
 
>parameter2是所要删除的RAW照片后缀名，列如‘CR2’（佳能相机）、‘ARW’(索尼相机)。


```
 $ node raw parameter1 parameter2 
```
 
##Done!