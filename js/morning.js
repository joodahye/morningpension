$(document).ready(function(){
	
	//��ܸ޴�
	$("header li>a").on("mouseenter click",function(){
		$("header ul").stop().animate({height:"200px"});
		$("header nav").slideDown();
	}); //�޴���
	
	//Ŀ���� ��ܸ��θ޴� ����(ul)�� �����
	$("header ul").mouseleave(function(){
			$("header ul").stop().animate({height:"100px"});
		$("header nav").slideUp();		
		});//������
	
	//�����ټ� ��� (������ �׸��� ��Ŀ���� ������)
	$(".last").blur(function(){
		$("header ul").stop().animate({height:"100px"});
		$("header nav").slideUp();
	});//���ټ���
	
	//�˾����
	$("#notice a").click(function(){
			$("#popup").fadeIn();
		
	});
	
	//�˾���޴ݱ�
	$("#popup button").click(function(){
		$("#popup").fadeOut();
	});
	
	
	//escŰ�� ������ �˾�â�� ������.
	$(document).keydown(function(event){
		//escŰ�� 27, enterŰ�� 13
		if( event.keyCode == 27){
			$("#popup").fadeOut();
		}
		
	});
	
	
	//���ʹ��� �ڵ� �����̵� (2.5�� �������� ���������� leftMove�Լ��� ȣ��!)
	const autoSlide = setInterval(leftMove,2500);
	function leftMove(){
			$("#slide div").stop().animate({left:"-1100px"},1000,function(){
					$(this).append( $("#slide div a:first-child"));
					$(this).css("left",0);
				});		
			}
});