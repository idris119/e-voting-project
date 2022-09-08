let popup =document.getElementById('popup');
            function openpopup(){
                popup.classList.add("openpopup")

            }
            function closepopup(){
                popup.classList.remove("openpopup")

            }
            function increment(){
                let i=0;
                i=+1;
                return increment();
            }
            let votesCasted = document.getElementById('submitId');

                 votesCasted.addEventListener (click => increment(votes-casted))