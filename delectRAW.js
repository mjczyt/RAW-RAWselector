var fs = require('fs');

delectFile(__dirname + '/test', process.argv[2], process.argv[3]);
function delectFile(path, saveType, delectType) {
    fs.readdir(path, 'utf8', function (err, fileArry) {
        if (err) {
            console.log(err);
        } else {
            var saveNumber = [];
            fileArry.forEach(function (element) {
                // console.log(element);
                //先找到所有要保留的照片对应的序号 放入saveNumber数组中
                if (element.indexOf('.' + saveType) != -1) {
                    var pattern = /-?[0-9]\d*/;
                    var elementInfo = pattern.exec(element);
                    // console.log(elementInfo);
                    if (elementInfo != null) {
                        saveNumber.push(elementInfo[0]);
                    }
                }
            });
            if(saveNumber.length==0){
                return console.log("can't find the file")
            };
            //再循环匹配相应的保留文件
            var delectCount=0;
            fileArry.forEach(function (element) {
                if (element.indexOf('.' + delectType) != -1) {
                    var toDelect=true;
                    var pattern = /-?[0-9]\d*/;
                    var elementInfo = pattern.exec(element);
                    //循环遍历数组中的文件编号与当前文件比较 判断是否需要删除当前文件
                    saveNumber.forEach(function(number) {
                        if(elementInfo!=null&&number==elementInfo[0]){
                          toDelect=false;
                          console.log(elementInfo+' save');
                        }
                    }, this);
                    if(toDelect){
                        console.log(element+' need to be delect!')
                        console.log(path+'/'+element);
                        fs.unlink(path+'/'+element,function(){
                            delectCount++;
                            console.log('delected '+delectCount+' file!')
                        })
                    }
                }
            });
            console.log(saveNumber);
        }
    });
}