dados = [];

jQuery(document).ready(function (){
      jQuery("#preco").maskMoney({showSymbol: false,  thousands:'.', decimal:','});

      jQuery("#btnSalvar").click(salvar);

      jQuery("#cad").click(showCad);
      jQuery("#list").click(showList);

});


function salvar(){
    var errors = [];

    var tpMercadoria = jQuery("#tpMercadoria").val();
    var tpNegocio = jQuery('input[name=tipo]:checked').val();
    var cdMercadoria = jQuery("#cdMercadoria").val();
    var nomeMercadoria = jQuery("#nomeMercadoria").val();
    var quantidade = jQuery("#quantidade").val();
    var preco = jQuery("#preco").val();

    if("" == tpMercadoria){
      errors.push( "Favor Preencher Todos os campos \n");
    }

    if(tpNegocio == undefined){
       errors.push("\n");
    }
 
    if(errors.length != 0){
      printErrors(errors);
      return;
    }

    dados.push({"cdMercadoria" : cdMercadoria, "nomeMercadoria": nomeMercadoria, "quantidade": quantidade, "preco": preco, "tpMercadoria": tpMercadoria, "tpNegocio" : tpNegocio});

    /*separa em uma funcao*/
    jQuery("#tpMercadoria").val("");
    jQuery('input[name=tipo]:checked').attr("checked", false);
    jQuery("#cdMercadoria").val("");
    jQuery("#nomeMercadoria").val("");
    jQuery("#quantidade").val("");
    jQuery("#preco").val("");
    /*separa em uma funcao*/

}


function printErrors(errors){
  alert(errors);
}


function showList(){
  jQuery(".cadBt").removeClass("active");
  jQuery(".listBt").addClass("active");

  jQuery(".cad").each(function () {
    jQuery(this).addClass("hidden");
  });

  jQuery(".list").each(function () {
    jQuery(this).removeClass("hidden");
  });


  jQuery.each(dados,function (idx, item){
      jQuery(".table > tbody ").append("<tr><td>" + item.cdMercadoria + "</td><td>" + item.tpMercadoria + "</td><td>" +
       item.nomeMercadoria + "</td><td>" + item.quantidade + "</td><td>" + item.preco + "</td><td>" + item.tpNegocio + "</td></tr>");
  });

}


function showCad(){
  jQuery(".table > tbody > tr").remove();
  jQuery(".cadBt").addClass("active");
  jQuery(".listBt").removeClass("active");

  jQuery(".cad").each(function () {
    jQuery(this).removeClass("hidden");
  });

  jQuery(".list").each(function () {
    jQuery(this).addClass("hidden");
  });
}
