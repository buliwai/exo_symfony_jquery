
// je m'assure que la "page" est bien chargée avant d'executer mon code
$(document).ready(function() {

    // en css tous les articles sont cachés, donc ici je n'affiche que les trois premiers
    $('.article').slice(0, 3).show();
    // au clic sur le bouton "voir plus"
    // afficher tous les articles
    // masquer le bouton

    // je sélectionne en jQuery mon bouton
    // j'utilise la fonction on('click') pour executer une fonction
    // quand le bouton est cliqué
    $('.button-more').on('click', function() {

        // this fait référence au bouton
        // $('.button-more') = $(this)

        // si le texte est égal à "voir plus"
        if ($(this).text() === 'Voir plus') {

            //je  change le texte en "voir moins"
            $(this).text('Voir moins');

            // si le bouton a en texte "voir plus" j'affiche tous mes articles
            $('.article').show();

            // sinon (donc s'il est égal à "voir moins"), je le change en "voir plus")
        } else {
            $(this).text('Voir plus');

            // je sélectionne tous mes articles (sauf les trois premiers grâce à slice)
            // et je les masque
            $('.article').slice(3).hide();
        }

    });
    //faire que popup apparaisse qaund on click sur newsletter
    //de base popup en display none dans css au click on va chercher la class qui est en display flex
    //afin que le pop up apparaisse
    $('.header-newsletter').on('click', function() {
        $('.popup-newsletter').addClass('popup-newsletter-show');
    });


    // au clic n'importe ou dans ma page
    $('body').on('click', function (e) {

        // e = evenement, donc c'est toutes les infos relatives au clic que je viens de faire
        // avec e.target je regarde si l'élement cliqué n'est pas le bouton de newsletter
        // ou la popup en elle même pour éviter de masquer ma popup si c'est le cas
        if (!$('.header-newsletter').is(e.target) && !$('.popup-newsletter').is(e.target)) {
            // dans ce cas là je masque ma popup
            $('.popup-newsletter').removeClass('popup-newsletter-show');
        }

    });
    $(".liste").hide(0, function() {

    });
    $(".icon-dribbble").mouseover(function(){
        $(".liste").show();
    });
    $(".liste").mouseover(function(){
        $(".liste").show();
    });
    $(".liste").mouseout(function(){
        $(".liste").hide();
    });
});