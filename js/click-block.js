var target='.grid-block';

jQuery(target).each(function(){
    jQuery(this).click(function(){
        location = jQuery(this).find('a').attr('href');});
    jQuery(this).css('cursor','pointer');
});