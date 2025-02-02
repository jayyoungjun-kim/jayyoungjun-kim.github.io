document.addEventListener('DOMContentLoaded', function() {
    const target = document.querySelector('.main-header-title');
    const text = 'A well-designed product should be both visually appealing and highly functional, prioritizing usability1 and efficiency2. The ultimate goal of design is to create a seamless experience for the user, meeting their needs and expectations without complication or frustration.3';
    let index = 0;
    const typingSpeed = 30; // 타이핑 속도 조절 

    function typeWriter() {
        if (index < text.length) {
            let contentToAdd = '';
            let char = text.charAt(index);

            // 숫자에 대한 <sup> 태그 처리
            if (char === '1' || char === '2' || char === '3') {
                contentToAdd = `<sup-main-header>${char}</sup-main-header>`;
                index++; // 숫자 다음 문자로 인덱스 이동
            } 
            // HTML 태그 처리
            else if (char === '<') {
                let tagEnd = text.indexOf('>', index) + 1;
                contentToAdd = text.substring(index, tagEnd);
                index = tagEnd;
            } else {
                contentToAdd = char;
                index++;
            }

            target.innerHTML += contentToAdd;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    typeWriter(); // 함수 호출
});



