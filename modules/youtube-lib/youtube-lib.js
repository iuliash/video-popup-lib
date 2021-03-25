class YoutubeLibrary {
    constructor(buttonId, url) {
        this.buttonId = buttonId;
        this.url = url;
    }

    init() {
        let openButton = document.getElementById(this.buttonId);
        console.log(this.buttonId);
        openButton.addEventListener("click", () => document.getElementById('video-modal').classList.add('modal__open'));
        document.addEventListener('keydown', (e) => {
            if (e.keyCode === 27)
                document.getElementById('video-modal').classList.remove('modal__open');
        });
        this.render();
    }

    destroy() {
        let openButton = document.getElementById(this.buttonId);
        openButton.removeEventListener("click", () => document.getElementById('video-modal').classList.add('modal__open'));
        document.removeEventListener('keydown', (e) => {
            if (e.keyCode === 27)
                document.getElementById('video-modal').classList.remove('modal__open');
        });
        document.body.removeChild(document.getElementById('video-modal'));
    }

    render(){
        let modalContainer = document.createElement('DIV');
        modalContainer.classList.add("modal__fullscreen");
        modalContainer.setAttribute('id', "video-modal");
        modalContainer.setAttribute('aria-modal', "true");

        let modalContent = document.createElement('DIV');
        modalContent.className = "modal_content";

        let closeButton = document.createElement('SPAN');
        closeButton.innerText = "✕";
        closeButton.className = "modal__close-btn";
        closeButton.addEventListener("click", () => document.getElementById('video-modal').classList.remove('modal__open'));

        let videoContainer = document.createElement('DIV');
        videoContainer.className = "content__video";

        let video = document.createElement('IFRAME');
        video.setAttribute("src", this.url);
        video.setAttribute("loading", "lazy");
        video.setAttribute("title", "YouTube video player");
        video.setAttribute("frameborder", "0");
        video.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
        video.setAttribute("allowfullscreen", "true");

        videoContainer.appendChild(video);
        modalContent.appendChild(closeButton);
        modalContent.appendChild(videoContainer);
        modalContainer.appendChild(modalContent);

        document.body.appendChild(modalContainer);
    }
}