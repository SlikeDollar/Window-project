const forms = () => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          phoneInputs = document.querySelectorAll('input[name="user_phone"]');
    phoneInputs.forEach(item => {
        item.addEventListener("input", () => {
            item.value = item.value.replace(/\D/, '');
        });
    });    

    
    const message = {
        loading: 'Загрузка...',
        success: 'Форма отправлена',
        failure: 'Что-то пошло не так...' 
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        
        let result = await fetch(url, {
            method: "POST",
            body: data
        });

        return await result.text();
    };

    form.forEach(item => {
        item.addEventListener('submit', (event) => {
            event.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');

            item.appendChild(statusMessage);
            const formData = new FormData(item);
            
            postData('assets/server.php', formData)
            .then(res => {
                console.log(res);
                statusMessage.textContent = message.success;
            }).catch(error => {
                statusMessage.textContent = message.failure;
                throw error;
            }).finally(() => {
                inputs.forEach(item => item.value = '');
                setTimeout(() => {
                    statusMessage.remove();
                }, 3000);
            });
        });
    });
};

export default forms;