<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>表格案例-面向过程</title>
    <style>

    </style>
    <script>
		var arr=[];
		for (var i = 0; i < 3 ;i++) {
			arr[i]=function(){
				console.log(i)
			}
		}
	arr[3]();

	</script>
    <script type="text/javascript">
    	var a=function(){
    		console.log(1);
    	}

    	function a(){
    		console.log(2);
    	}
    	a();
    </script>
    <script>
    	var a=10;
		function foo(){
			console.log(a)
		}
		(function(jq){
			var a=20;
			jq()
		})(foo);

    </script>
</head>
<body>
	
</body>
</html>