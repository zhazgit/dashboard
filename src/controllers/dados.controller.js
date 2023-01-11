const dadosCtrl = {};
const axios = require('axios');
const e = require('connect-flash');
const RequestIp = require('@supercharge/request-ip');
const requestIp = require('request-ip');

     //Variaveis
     var data;  var  AGUARDANDO_CHEGADA; var data1; var  AGUARDANDO_VISTORIA; var  data4; var  EM_VISTORIA; var  data5; var  VISTORIADO;
     var  data6; var  AGUARDANDO_APROVACAO; var  data7; var  AGUARDANDO_PECAS; var  data8; var  APROVADO;  var  data9; var  EM_MANUTENCAO;
     var  data11; var  MANUTENCAO_CONCLUIDA; var  data13;  var  EXPEDICAO; var  data17; var  REPROVADO; var  data18; var  FINALIZADA; var FT15;
     var jan = 0; var fev = 0; var mar = 0; var abr = 0; var mai = 0; var jun = 0; 
     var jul = 0; var ago = 0; var set = 0; var out = 0; var nov = 0; var dez = 0;
     var janA = 0; var fevA = 0; var marA = 0; var abrA = 0; var maiA = 0; var junA = 0;
     var julA = 0; var agoA = 0; var setA = 0; var outA = 0; var novA = 0; var dezA = 0;    
     var empresa;
     var status;
     var ip;
     var country;
     var city;
     var region;
     var countryCode;
     var isp;
     const url = process.env.URL_API;
    

     //Pega dados API a cada 5 minutos.
        setTimeout(async function run() {
            //Axios API
            data  = await axios(`${url}1`);
            await formataData(data.data);  
            AGUARDANDO_CHEGADA = await data.data;              
            
            data1 = await axios(`${url}3`);
            await formataData(data1.data); 
            AGUARDANDO_VISTORIA = await data1.data;
            
            data4 = await axios(`${url}4`);
            await formataData(data4.data);
            EM_VISTORIA = await data4.data;
            
            data5 = await axios(`${url}5`);
            await formataData(data5.data); 
            VISTORIADO = await data5.data;
            
            data6 = await axios(`${url}6`);
            await formataData(data6.data);
            AGUARDANDO_APROVACAO = await data6.data;
            
            data7 = await axios(`${url}7`);
            await formataData(data7.data);
            AGUARDANDO_PECAS = await data7.data;
            

            data8 = await axios(`${url}8`);
            await formataData(data8.data);
            APROVADO = await data8.data;
            

            data9 = await axios(`${url}9`);
            await formataData(data9);
            EM_MANUTENCAO = await data9.data;
            
            data11 = await axios(`${url}11`);
            await formataData(data11.data);
            MANUTENCAO_CONCLUIDA = await data11.data;
            

            data13 = await axios(`${url}13`);
            await formataData(data13.data);
            EXPEDICAO = await data13.data; 
            

            data17 = await axios(`${url}17`);
            await formataData(data17);
            REPROVADO = await data17.data;
            

            data18 = await axios(`${url }15`);
            await formataData(data18.data);
            FINALIZADA = await data18.data;
            

            var date =  new Date();
            console.log("Função Rodou: " + date);
            setTimeout(run, 900000);
        });

    async function ipCliente (dado) {
        var clientIp = requestIp.getClientIp(dado); 
        console.log(clientIp);    
        const dadosIP = await axios.get(`http://ip-api.com/json/${clientIp}`)
        status = dadosIP.data.status;
        ip = dadosIP.data.query;
        country = dadosIP.data.country;
        city = dadosIP.data.city;
        region = dadosIP.data.region;
        countryCode = dadosIP.data.countryCode;
        isp = dadosIP.data.isp; 
    }    

dadosCtrl.renderDados = async (req, res) =>{
    var dIP = await req;
    await ipCliente(dIP);
    

    var date = new Date();
    var anoAnterior = (date.getUTCFullYear() - 1);
    var anoAtual = date.getUTCFullYear();

    //Zerar contador por mês
    jan = 0, fev = 0, mar = 0, abr = 0, mai = 0, jun = 0, jul = 0 , ago = 0, set = 0, out = 0, nov = 0, dez = 0; 
    janA = 0, fevA = 0, marA = 0, abrA = 0, maiA = 0, junA = 0, julA = 0 , agoA = 0, setA = 0, outA = 0, novA = 0, dezA = 0; 
    empresa = {dado: []};    

    let email = req.user.email;
    let img = req.user.img;
    var usuario =  req.user.cnpj_cpf;
    usuario.toUpperCase();
    var dados = {data: []};

    //Variaveis Totais
    var totalAguardandoChegada = 0;
    var totalAguardandoVistoria = 0;
    var totalEmVistoria = 0;
    var totalVistoriado = 0;
    var totalAguardandoAprovacao = 0;
    var totalAguardandoPecas = 0;
    var totalAprovado = 0;
    var totalEmManutencao = 0;
    var totalManutencaoConcluida = 0;
    var totalExpedicao = 0;
    var totalReprovado = 0;
    var totalFinalizada = 0;
    var totalColetor = 0;
    var totalLeitor = 0;
    var totalImpressora = 0;
    var totalBuscaPreco = 0;
    var totalOutros = 0;
    var totalPColetor = 0;
    var totalPLeitor = 0;
    var totalPImpressora = 0;
    var totalPBuscaPreco = 0;
    var totalPOutros = 0;
    var totalColetorAC = 0;
    var totalLeitorAC = 0;
    var totalImpressoraAC = 0;
    var totalBuscaPrecoAC = 0;
    var totalOutrosAC = 0;
    var totalGeralAC = 0;

    // Váriaveis Totais por Filial
    var totalItapevi = 0;
    var totalSeropedica = 0;
    var totalOsasco = 0;
    var totalCajamar = 0;
    var totalUberlandia = 0;
    var totalCSA = 0;

    // Coletores
    var totalItapeviColetor = 0;
    var totalSeropedicaColetor = 0;
    var totalOsascoColetor = 0;
    var totalCajamarColetor = 0;
    var totalUberlandiaColetor = 0;
    var totalCSAColetor = 0;

    //Leitores
    var totalItapeviLeitor = 0;
    var totalSeropedicaLeitor = 0;
    var totalOsascoLeitor = 0;
    var totalCajamarLeitor = 0;
    var totalUberlandiaLeitor = 0;
    var totalCSALeitor = 0;

    //Impressras
    var totalItapeviImpressora = 0;
    var totalSeropedicaImpressora = 0;
    var totalOsascoImpressora = 0;
    var totalCajamarImpressora = 0;
    var totalUberlandiaImpressora = 0;
    var totalCSAImpressora = 0;

    //Busca Preço
    var totalItapeviBP = 0;
    var totalSeropedicaBP = 0;
    var totalOsascoBP= 0;
    var totalCajamarBP = 0;
    var totalUberlandiaBP= 0;
    var totalCSABP = 0;

    //Outros
    var totalItapeviOutro = 0;
    var totalSeropedicaOutro = 0;
    var totalOsascoOutro = 0;
    var totalCajamarOutro = 0;
    var totalUberlandiaOutro = 0;
    var totalCSAOutro = 0;

    // Itapevi 
    var totalAguardandoChegadaItapevi = 0;
    var totalAguardandoVistoriaItapevi = 0;
    var totalEmVistoriaItapevi = 0;
    var totalVistoriadoItapevi = 0;
    var totalAguardandoAprovacaoItapevi = 0;
    var totalAguardandoPecasItapevi = 0;
    var totalAprovadoItapevi = 0;
    var totalEmManutencaoItapevi = 0;
    var totalManutencaoConcluidaItapevi = 0;
    var totalExpedicaoItapevi = 0;
    var totalReprovadoItapevi = 0;
    var totalFinalizadaItapevi = 0;

    // Oscasco
    var totalAguardandoChegadaOsasco= 0;
    var totalAguardandoVistoriaOsasco = 0;
    var totalEmVistoriaOsasco = 0;
    var totalVistoriadoOsasco = 0;
    var totalAguardandoAprovacaoOsasco = 0;
    var totalAguardandoPecasOsasco = 0;
    var totalAprovadoOsasco = 0;
    var totalEmManutencaoOsasco = 0;
    var totalManutencaoConcluidaOsasco = 0;
    var totalExpedicaoOsasco = 0;
    var totalReprovadoOsasco = 0;
    var totalFinalizadaOsasco = 0;

    // Seropedica
    var totalAguardandoChegadaSeropedica= 0;
    var totalAguardandoVistoriaSeropedica = 0;
    var totalEmVistoriaSeropedica = 0;
    var totalVistoriadoSeropedica = 0;
    var totalAguardandoAprovacaoSeropedica = 0;
    var totalAguardandoPecasSeropedica = 0;
    var totalAprovadoSeropedica = 0;
    var totalEmManutencaoSeropedica = 0;
    var totalManutencaoConcluidaSeropedica = 0;
    var totalExpedicaoSeropedica = 0;
    var totalReprovadoSeropedica = 0;
    var totalFinalizadaSeropedica = 0;

    // Cajamar
    var totalAguardandoChegadaCajamar= 0;
    var totalAguardandoVistoriaCajamar = 0;
    var totalEmVistoriaCajamar = 0;
    var totalVistoriadoCajamar = 0;
    var totalAguardandoAprovacaoCajamar= 0;
    var totalAguardandoPecasCajamar = 0;
    var totalAprovadoCajamar = 0;
    var totalEmManutencaoCajamar = 0;
    var totalManutencaoConcluidaCajamar = 0;
    var totalExpedicaoCajamar= 0;
    var totalReprovadoCajamar= 0;
    var totalFinalizadaCajamar = 0;

    // Uberlandia
    var totalAguardandoChegadaUberlandia= 0;
    var totalAguardandoVistoriaUberlandia = 0;
    var totalEmVistoriaUberlandia = 0;
    var totalVistoriadoUberlandia = 0;
    var totalAguardandoAprovacaoUberlandia= 0;
    var totalAguardandoPecasUberlandia = 0;
    var totalAprovadoUberlandia = 0;
    var totalEmManutencaoUberlandia = 0;
    var totalManutencaoConcluidaUberlandia = 0;
    var totalExpedicaoUberlandia= 0;
    var totalReprovadoUberlandia= 0;
    var totalFinalizadaUberlandia = 0;

     // Cabo de Santo Agostinho
     var totalAguardandoChegadaCSA= 0;
     var totalAguardandoVistoriaCSA = 0;
     var totalEmVistoriaCSA = 0;
     var totalVistoriadoCSA = 0;
     var totalAguardandoAprovacaoCSA= 0;
     var totalAguardandoPecasCSA = 0;
     var totalAprovadoCSA = 0;
     var totalEmManutencaoCSA = 0;
     var totalManutencaoConcluidaCSA = 0;
     var totalExpedicaoCSA= 0;
     var totalReprovadoCSA= 0;
     var totalFinalizadaCSA = 0;
    
    for(var i = 0; i < AGUARDANDO_CHEGADA.length; i++) {
    let cliente = AGUARDANDO_CHEGADA[i].PessoaFantasia;
    if(cliente.match(`${usuario}`)) {
        empresa.dado.push({
            os: AGUARDANDO_CHEGADA[i].OSID,
            dataEntrada: AGUARDANDO_CHEGADA[i].OSData,
            dataMovimento: AGUARDANDO_CHEGADA[i].DataFinalMovto,
            cliente: AGUARDANDO_CHEGADA[i].PessoaCnpjCpf,
            nome: AGUARDANDO_CHEGADA[i].PessoaFantasia,
            agente: AGUARDANDO_CHEGADA[i].AgenteNegNome,
            estagio: AGUARDANDO_CHEGADA[i].EstagioDescricao,
            ns: AGUARDANDO_CHEGADA[i].EquipamentoLTS,
            equipamento: AGUARDANDO_CHEGADA[i].NomeEquipamento,
            descricao: AGUARDANDO_CHEGADA[i].DescricaoTipoOS,
            valor: AGUARDANDO_CHEGADA[i].ValorTotal
            });
            totalAguardandoChegada += 1;          
         if(cliente.match(`ITAPEVI`)) {
            totalAguardandoChegadaItapevi += 1;
         }
         if(cliente.match(`SEROP`) || cliente.match(`Serop`)) {
            totalAguardandoChegadaSeropedica += 1;
         } 
         if(cliente.match(`OSASCO`)) {
            totalAguardandoChegadaOsasco += 1;
         } 
         if(cliente.match(`CAJAMAR`)) {
            totalAguardandoChegadaCajamar += 1;
         } 
         if(cliente.match(`UBERL`)) {
            totalAguardandoChegadaUberlandia += 1;
         }
         if(cliente.match(`CABO`)) {
            totalAguardandoChegadaCSA += 1;
         }   
        }
    }

    for(var i = 0; i < AGUARDANDO_VISTORIA.length; i++) {
        let cliente = AGUARDANDO_VISTORIA[i].PessoaFantasia;
        if(cliente.includes(`${usuario}`)) {
            empresa.dado.push({
                os: AGUARDANDO_VISTORIA[i].OSID,
                dataEntrada: AGUARDANDO_VISTORIA[i].OSData,
                dataMovimento: AGUARDANDO_VISTORIA[i].DataFinalMovto,
                cliente: AGUARDANDO_VISTORIA[i].PessoaCnpjCpf,
                nome: AGUARDANDO_VISTORIA[i].PessoaFantasia,
                agente: AGUARDANDO_VISTORIA[i].AgenteNegNome,
                estagio: AGUARDANDO_VISTORIA[i].EstagioDescricao,
                ns: AGUARDANDO_VISTORIA[i].EquipamentoLTS,
                equipamento: AGUARDANDO_VISTORIA[i].NomeEquipamento,
                descricao: AGUARDANDO_VISTORIA[i].DescricaoTipoOS,
                valor: AGUARDANDO_VISTORIA[i].ValorTotal
                }); 
        totalAguardandoVistoria += 1;
        if(cliente.match(`ITAPEVI`)) {
            totalAguardandoVistoriaItapevi += 1;            
         }
         if(cliente.match(`SEROP`) || cliente.match(`Serop`)) {
            totalAguardandoVistoriaSeropedica += 1;
         } 
         if(cliente.match(`OSASCO`)) {
            totalAguardandoVistoriaOsasco += 1;
         } 
         if(cliente.match(`CAJAMAR`)) {
            totalAguardandoVistoriaCajamar += 1;
         } 
         if(cliente.match(`UBERL`)) {
            totalAguardandoVistoriaUberlandia += 1;
         }
         if(cliente.match(`CABO`)) {
            totalAguardandoVistoriaCSA += 1;
         }                
        }
    }

    for(var i = 0; i < EM_VISTORIA.length; i++) {
        let cliente = EM_VISTORIA[i].PessoaFantasia;
        if(cliente.includes(`${usuario}`)) {
            empresa.dado.push({
                os: EM_VISTORIA[i].OSID,
                dataEntrada: EM_VISTORIA[i].OSData,
                dataMovimento: EM_VISTORIA[i].DataFinalMovto,
                cliente: EM_VISTORIA[i].PessoaCnpjCpf,
                nome: EM_VISTORIA[i].PessoaFantasia,
                agente: EM_VISTORIA[i].AgenteNegNome,
                estagio: EM_VISTORIA[i].EstagioDescricao,
                ns: EM_VISTORIA[i].EquipamentoLTS,
                equipamento: EM_VISTORIA[i].NomeEquipamento,
                descricao: EM_VISTORIA[i].DescricaoTipoOS,
                valor: EM_VISTORIA[i].ValorTotal
                });       
        totalEmVistoria += 1; 
        if(cliente.match(`ITAPEVI`)) {
            totalItapevi += 1;
         }
         if(cliente.match(`SEROP`) || cliente.match(`Serop`)) {
            totalSeropedica += 1;
         } 
         if(cliente.match(`OSASCO`)) {
            totalOsasco += 1;
         } 
         if(cliente.match(`CAJAMAR`)) {
            totalCajamar += 1;
         } 
         if(cliente.match(`UBERL`)) {
            totalUberlandia += 1;
         }
         if(cliente.match(`CABO`)) {
            totalCSA += 1;
         }         
        }
    }

    for(var i = 0; i < VISTORIADO.length; i++) {
        let cliente = VISTORIADO[i].PessoaFantasia;
        if(cliente.includes(`${usuario}`)) {
            empresa.dado.push({
                os: VISTORIADO[i].OSID,
                dataEntrada: VISTORIADO[i].OSData,
                dataMovimento: VISTORIADO[i].DataFinalMovto,
                cliente: VISTORIADO[i].PessoaCnpjCpf,
                nome: VISTORIADO[i].PessoaFantasia,
                agente: VISTORIADO[i].AgenteNegNome,
                estagio: VISTORIADO[i].EstagioDescricao,
                ns: VISTORIADO[i].EquipamentoLTS,
                equipamento: VISTORIADO[i].NomeEquipamento,
                descricao: VISTORIADO[i].DescricaoTipoOS,
                valor: VISTORIADO[i].ValorTotal
                });
        totalVistoriado += 1; 
        if(cliente.match(`ITAPEVI`)) {
            totalVistoriadoItapevi += 1;
         }
         if(cliente.match(`SEROP`) || cliente.match(`Serop`)) {
            totalVistoriadoSeropedica += 1;
         } 
         if(cliente.match(`OSASCO`)) {
            totalVistoriadoOsasco += 1;
         } 
         if(cliente.match(`CAJAMAR`)) {
            totalVistoriadoCajamar += 1;
         } 
         if(cliente.match(`UBERL`)) {
            totalVistoriadoUberlandia += 1;
         }
         if(cliente.match(`CABO`)) {
            totalVistoriadoCSA += 1;
         }                
        }
    }

    for(var i = 0; i < AGUARDANDO_APROVACAO.length; i++) {
        let cliente = AGUARDANDO_APROVACAO[i].PessoaFantasia;
        if(cliente.includes(`${usuario}`)) {
            empresa.dado.push({
                os: AGUARDANDO_APROVACAO[i].OSID,
                dataEntrada: AGUARDANDO_APROVACAO[i].OSData,
                dataMovimento: AGUARDANDO_APROVACAO[i].DataFinalMovto,
                cliente: AGUARDANDO_APROVACAO[i].PessoaCnpjCpf,
                nome: AGUARDANDO_APROVACAO[i].PessoaFantasia,
                agente: AGUARDANDO_APROVACAO[i].AgenteNegNome,
                estagio: AGUARDANDO_APROVACAO[i].EstagioDescricao,
                ns: AGUARDANDO_APROVACAO[i].EquipamentoLTS,
                equipamento: AGUARDANDO_APROVACAO[i].NomeEquipamento,
                descricao: AGUARDANDO_APROVACAO[i].DescricaoTipoOS,
                valor: AGUARDANDO_APROVACAO[i].ValorTotal
                });       
        totalAguardandoAprovacao += 1;
        if(cliente.match(`ITAPEVI`)) {
            totalAguardandoAprovacaoItapevi += 1;
         }
         if(cliente.match(`SEROP`) || cliente.match(`Serop`)) {
            totalAguardandoAprovacaoSeropedica += 1;
         } 
         if(cliente.match(`OSASCO`)) {
            totalAguardandoAprovacaoOsasco += 1;
         } 
         if(cliente.match(`CAJAMAR`)) {
            totalAguardandoAprovacaoCajamar += 1;
         } 
         if(cliente.match(`UBERL`)) {
            totalAguardandoAprovacaoUberlandia += 1;
         }
         if(cliente.match(`CABO`)) {
            totalAguardandoAprovacaoCSA += 1;
         }  
        }
    }

    for(var i = 0; i < AGUARDANDO_PECAS.length; i++) {
        let cliente = AGUARDANDO_PECAS[i].PessoaFantasia;
        if(cliente.includes(`${usuario}`)) {
            empresa.dado.push({
                os: AGUARDANDO_PECAS[i].OSID,
                dataEntrada: AGUARDANDO_PECAS[i].OSData,
                dataMovimento: AGUARDANDO_PECAS[i].DataFinalMovto,
                cliente: AGUARDANDO_PECAS[i].PessoaCnpjCpf,
                nome: AGUARDANDO_PECAS[i].PessoaFantasia,
                agente: AGUARDANDO_PECAS[i].AgenteNegNome,
                estagio: AGUARDANDO_PECAS[i].EstagioDescricao,
                ns: AGUARDANDO_PECAS[i].EquipamentoLTS,
                equipamento: AGUARDANDO_PECAS[i].NomeEquipamento,
                descricao: AGUARDANDO_PECAS[i].DescricaoTipoOS,
                valor: AGUARDANDO_PECAS[i].ValorTotal
                });
        totalAguardandoPecas += 1; 
        if(cliente.match(`ITAPEVI`)) {
            totalAguardandoPecasItapevi += 1;
         }
         if(cliente.match(`SEROP`) || cliente.match(`Serop`)) {
            totalAguardandoPecasSeropedica += 1;
         } 
         if(cliente.match(`OSASCO`)) {
            totalAguardandoPecasOsasco += 1;
         } 
         if(cliente.match(`CAJAMAR`)) {
            totalAguardandoPecasCajamar += 1;
         } 
         if(cliente.match(`UBERL`)) {
            totalAguardandoPecasUberlandia += 1;
         }
         if(cliente.match(`CABO`)) {
            totalAguardandoPecasCSA += 1;
         }                
        }
    }

    for(var i = 0; i < APROVADO.length; i++) {
        let cliente = APROVADO[i].PessoaFantasia;
        if(cliente.includes(`${usuario}`)) {
            empresa.dado.push({
                os: APROVADO[i].OSID,
                dataEntrada: APROVADO[i].OSData,
                dataMovimento: APROVADO[i].DataFinalMovto,
                cliente: APROVADO[i].PessoaCnpjCpf,
                nome: APROVADO[i].PessoaFantasia,
                agente: APROVADO[i].AgenteNegNome,
                estagio: APROVADO[i].EstagioDescricao,
                ns: APROVADO[i].EquipamentoLTS,
                equipamento: APROVADO[i].NomeEquipamento,
                descricao: APROVADO[i].DescricaoTipoOS,
                valor: APROVADO[i].ValorTotal
                });
        totalAprovado += 1;    
        if(cliente.match(`ITAPEVI`)) {
            totalAprovadoItapevi += 1;
         }
         if(cliente.match(`SEROP`) || cliente.match(`Serop`)) {
            totalAprovadoSeropedica += 1;
         } 
         if(cliente.match(`OSASCO`)) {
            totalAprovadoOsasco += 1;
         } 
         if(cliente.match(`CAJAMAR`)) {
            totalAprovadoCajamar += 1;
         } 
         if(cliente.match(`UBERL`)) {
            totalAprovadoUberlandia += 1;
         }
         if(cliente.match(`CABO`)) {
            totalAprovadoCSA += 1;
         }             
        }
    }

    for(var i = 0; i < EM_MANUTENCAO.length; i++) {
        let cliente = EM_MANUTENCAO[i].PessoaFantasia;
        if(cliente.includes(`${usuario}`)) {
            empresa.dado.push({
                os: EM_MANUTENCAO[i].OSID,
                dataEntrada: EM_MANUTENCAO[i].OSData,
                dataMovimento: EM_MANUTENCAO[i].DataFinalMovto,
                cliente: EM_MANUTENCAO[i].PessoaCnpjCpf,
                nome: EM_MANUTENCAO[i].PessoaFantasia,
                agente: EM_MANUTENCAO[i].AgenteNegNome,
                estagio: EM_MANUTENCAO[i].EstagioDescricao,
                ns: EM_MANUTENCAO[i].EquipamentoLTS,
                equipamento: EM_MANUTENCAO[i].NomeEquipamento,
                descricao: EM_MANUTENCAO[i].DescricaoTipoOS,
                valor: EM_MANUTENCAO[i].ValorTotal
                });       
        totalEmManutencao += 1;
        if(cliente.match(`ITAPEVI`)) {
            totalEmManutencaoItapevi += 1;
         }
         if(cliente.match(`SEROP`) || cliente.match(`Serop`)) {
            totalEmManutencaoSeropedica += 1;
         } 
         if(cliente.match(`OSASCO`)) {
            totalEmManutencaoOsasco += 1;
         } 
         if(cliente.match(`CAJAMAR`)) {
            totalEmManutencaoCajamar += 1;
         } 
         if(cliente.match(`UBERL`)) {
            totalEmManutencaoUberlandia += 1;
         }
         if(cliente.match(`CABO`)) {
            totalEmManutencaoCSA += 1;
         }  
        }
    }

    for(var i = 0; i < MANUTENCAO_CONCLUIDA.length; i++) {
        let cliente = MANUTENCAO_CONCLUIDA[i].PessoaFantasia;
        if(cliente.includes(`${usuario}`)) {
            empresa.dado.push({
                os: MANUTENCAO_CONCLUIDA[i].OSID,
                dataEntrada: MANUTENCAO_CONCLUIDA[i].OSData,
                dataMovimento: MANUTENCAO_CONCLUIDA[i].DataFinalMovto,
                cliente: MANUTENCAO_CONCLUIDA[i].PessoaCnpjCpf,
                nome: MANUTENCAO_CONCLUIDA[i].PessoaFantasia,
                agente: MANUTENCAO_CONCLUIDA[i].AgenteNegNome,
                estagio: MANUTENCAO_CONCLUIDA[i].EstagioDescricao,
                ns: MANUTENCAO_CONCLUIDA[i].EquipamentoLTS,
                equipamento: MANUTENCAO_CONCLUIDA[i].NomeEquipamento,
                descricao: MANUTENCAO_CONCLUIDA[i].DescricaoTipoOS,
                valor: MANUTENCAO_CONCLUIDA[i].ValorTotal
                });
        totalManutencaoConcluida += 1; 
        if(cliente.match(`ITAPEVI`)) {
            totalManutencaoConcluidaItapevi += 1;
         }
         if(cliente.match(`SEROP`) || cliente.match(`Serop`)) {
            totalManutencaoConcluidaSeropedica += 1;
         } 
         if(cliente.match(`OSASCO`)) {
            totalManutencaoConcluidaOsasco += 1;
         } 
         if(cliente.match(`CAJAMAR`)) {
            totalManutencaoConcluidaCajamar += 1;
         } 
         if(cliente.match(`UBERL`)) {
            totalManutencaoConcluidaUberlandia += 1;
         }
         if(cliente.match(`CABO`)) {
            totalManutencaoConcluidaCSA += 1;
         }                
        }
    }

    for(var i = 0; i < EXPEDICAO.length; i++) {
        let cliente = EXPEDICAO[i].PessoaFantasia;
        if(cliente.includes(`${usuario}`)) {
            empresa.dado.push({
                os: EXPEDICAO[i].OSID,
                dataEntrada: EXPEDICAO[i].OSData,
                dataMovimento: EXPEDICAO[i].DataFinalMovto,
                cliente: EXPEDICAO[i].PessoaCnpjCpf,
                nome: EXPEDICAO[i].PessoaFantasia,
                agente: EXPEDICAO[i].AgenteNegNome,
                estagio: EXPEDICAO[i].EstagioDescricao,
                ns: EXPEDICAO[i].EquipamentoLTS,
                equipamento: EXPEDICAO[i].NomeEquipamento,
                descricao: EXPEDICAO[i].DescricaoTipoOS,
                valor: EXPEDICAO[i].ValorTotal
                });
        totalExpedicao += 1; 
        if(cliente.match(`ITAPEVI`)) {
            totalExpedicaoItapevi += 1;
         }
         if(cliente.match(`SEROP`) || cliente.match(`Serop`)) {
            totalExpedicaoSeropedica += 1;
         } 
         if(cliente.match(`OSASCO`)) {
            totalExpedicaoOsasco += 1;
         } 
         if(cliente.match(`CAJAMAR`)) {
            totalExpedicaoCajamar += 1;
         } 
         if(cliente.match(`UBERL`)) {
            totalExpedicaoUberlandia += 1;
         }
         if(cliente.match(`CABO`)) {
            totalExpedicaoCSA += 1;
         }                
        }
    }

    for(var i = 0; i < REPROVADO.length; i++) {
        let cliente = REPROVADO[i].PessoaFantasia;
        if(cliente.includes(`${usuario}`)) {
            empresa.dado.push({
                os: REPROVADO[i].OSID,
                dataEntrada: REPROVADO[i].OSData,
                dataMovimento: REPROVADO[i].DataFinalMovto,
                cliente: REPROVADO[i].PessoaCnpjCpf,
                nome: REPROVADO[i].PessoaFantasia,
                agente: REPROVADO[i].AgenteNegNome,
                estagio: REPROVADO[i].EstagioDescricao,
                ns: REPROVADO[i].EquipamentoLTS,
                equipamento: REPROVADO[i].NomeEquipamento,
                descricao: REPROVADO[i].DescricaoTipoOS,
                valor: REPROVADO[i].ValorTotal
                });
        totalReprovado += 1;  
        if(cliente.match(`ITAPEVI`)) {
            totalAprovadoItapevi += 1;
         }
         if(cliente.match(`SEROP`) || cliente.match(`Serop`)) {
            totalAprovadoSeropedica += 1;
         } 
         if(cliente.match(`OSASCO`)) {
            totalAprovadoOsasco += 1;
         } 
         if(cliente.match(`CAJAMAR`)) {
            totalAprovadoCajamar += 1;
         } 
         if(cliente.match(`UBERL`)) {
            totalAprovadoUberlandia += 1;
         }
         if(cliente.match(`CABO`)) {
            totalAprovadoCSA += 1;
         }               
        }
    }

    for(var i = 0; i < FINALIZADA.length; i++) {
        let cliente = FINALIZADA[i].PessoaFantasia;
        if(cliente.includes(`${usuario}`)) {
            empresa.dado.push({
                os: FINALIZADA[i].OSID,
                dataEntrada: FINALIZADA[i].OSData,
                dataMovimento: FINALIZADA[i].DataFinalMovto,
                cliente: FINALIZADA[i].PessoaCnpjCpf,
                nome: FINALIZADA[i].PessoaFantasia,
                agente: FINALIZADA[i].AgenteNegNome,
                estagio: FINALIZADA[i].EstagioDescricao,
                ns: FINALIZADA[i].EquipamentoLTS,
                equipamento: FINALIZADA[i].NomeEquipamento,
                descricao: FINALIZADA[i].DescricaoTipoOS,
                valor: FINALIZADA[i].ValorTotal
                });
        totalFinalizada += 1; 
        if(cliente.match(`ITAPEVI`)) {
            totalFinalizadaItapevi += 1;
         }
         if(cliente.match(`SEROP`) || cliente.match(`Serop`)) {
            totalFinalizadaSeropedica += 1;
         } 
         if(cliente.match(`OSASCO`)) {
            totalFinalizadaOsasco += 1;
         } 
         if(cliente.match(`CAJAMAR`)) {
            totalFinalizadaCajamar += 1;
         } 
         if(cliente.match(`UBERL`)) {
            totalFinalizadaUberlandia += 1;
         }
         if(cliente.match(`CABO`)) {
            totalFinalizadaCSA += 1;
         }                    
        }
    }


  
  
    const ano = anoAtual;
    const  FT3 = formataData(empresa);
    for(var i = 0; i < empresa.dado.length; i ++) {        
        var valor = await empresa.dado[i].dataMovimento;        
        if(valor.match('01-'+ ano)) {
            jan += 1;     
        } 
        if(valor.match('02-'+ ano)) {
            fev += 1;     
        }  
        if(valor.match('03-'+ ano)) {
            mar += 1;     
        }  
        if(valor.match('04-'+ ano)) {
            abr += 1;     
        }  
        if(valor.match('05-'+ ano)) {
            mai += 1;     
        }  
        if(valor.match('06-'+ ano)) {
            jun += 1;     
        }  
        if(valor.match('07-'+ ano)) {
            jul += 1;     
        }  
        if(valor.match('08-'+ ano)) {
            ago += 1;     
        } 
        if(valor.match('09-'+ ano)) {
            set += 1;     
        }
        if(valor.match('10-'+ ano)) {
            out += 1;     
        }  
        if(valor.match('11-'+ ano)) {
            nov += 1;     
        }  
        if(valor.match('12-'+ ano)) {
            dez += 1;     
        }            
     }  
    

    
    const anoA = anoAnterior;
    const  FT4 = formataData(empresa);
    for(var i = 0; i < empresa.dado.length; i ++) {        
        var valor = await empresa.dado[i].dataMovimento;        
        if(valor.match('01-'+ anoA)) {
            janA += 1;     
        } 
        if(valor.match('02-'+ anoA)) {
            fevA += 1;     
        }  
        if(valor.match('03-'+ anoA)) {
            marA += 1;     
        }  
        if(valor.match('04-'+ anoA)) {
            abrA += 1;     
        }  
        if(valor.match('05-'+ anoA)) {
            maiA += 1;     
        }  
        if(valor.match('06-'+ anoA)) {
            junA += 1;     
        }  
        if(valor.match('07-'+ anoA)) {
            julA += 1;     
        }  
        if(valor.match('08-'+ anoA)) {
            agoA += 1;     
        } 
        if(valor.match('09-'+ anoA)) {
            setA += 1;     
        }
        if(valor.match('10-'+ anoA)) {
            outA += 1;     
        }  
        if(valor.match('11-'+ anoA)) {
            novA += 1;     
        }  
        if(valor.match('12-'+ anoA)) {
            dezA += 1;     
        }            
    }


    for(var i = 0; i < FINALIZADA.length; i ++) { 
        var cliente = FINALIZADA[i].PessoaFantasia;
        var valor = FINALIZADA[i].NomeEquipamento;
    if(cliente.includes(`${usuario}`)) {    
    if(valor.match(/LEITOR DE DADOS/) || valor.match(/LEITOR/)) {
        totalLeitor += 1; 
        if(cliente.match(`ITAPEVI`)) {
            totalItapeviLeitor += 1;
         }
         if(cliente.match(`SEROP`) || cliente.match(`Serop`)) {
            totalSeropedicaLeitor += 1;
         } 
         if(cliente.match(`OSASCO`)) {
            totalOsascoLeitor += 1;
         } 
         if(cliente.match(`CAJAMAR`)) {
            totalCajamarLeitor += 1;
         } 
         if(cliente.match(`UBERL`)) {
            totalUberlandiaLeitor += 1;
         }
         if(cliente.match(`CABO`)) {
            totalCSALeitor += 1;
         }              
    }
    if(valor.match(/COLETOR DE DADOS/) || valor.match(/COLETOR/)) {
        totalColetor += 1;
        if(cliente.match(`ITAPEVI`)) {
            totalItapeviColetor+= 1;
         }
         if(cliente.match(`SEROP`) || cliente.match(`Serop`)) {
            totalSeropedicaColetor+= 1;
         } 
         if(cliente.match(`OSASCO`)) {
            totalOsascoColetor += 1;
         } 
         if(cliente.match(`CAJAMAR`)) {
            totalCajamarColetor += 1;
         } 
         if(cliente.match(`UBERL`)) {
            totalUberlandiaColetor += 1;
         }
         if(cliente.match(`CABO`)) {
            totalCSAColetor += 1;
         }      
    }
    if(valor.match(/IMPRESSORA/) || valor.match(/IMPRESSORA TÉRMICA/)) {
        totalImpressora += 1;
        if(cliente.match(`ITAPEVI`)) {
            totalItapeviImpressora += 1;
         }
         if(cliente.match(`SEROP`) || cliente.match(`Serop`)) {
            totalSeropedicaImpressora += 1;
         } 
         if(cliente.match(`OSASCO`)) {
            totalOsascoImpressora += 1;
         } 
         if(cliente.match(`CAJAMAR`)) {
            totalCajamarImpressora+= 1;
         } 
         if(cliente.match(`UBERL`)) {
            totalUberlandiaImpressora += 1;
         }
         if(cliente.match(`CABO`)) {
            totalCSAImpressora+= 1;
         }    
    }
    if(valor.match(/TERMINAL DE CONSULTA/) || valor.match(/BUSCA/)) {
        totalBuscaPreco += 1;
        if(cliente.match(`ITAPEVI`)) {
            totalItapeviBP += 1;
         }
         if(cliente.match(`SEROP`) || cliente.match(`Serop`)) {
            totalSeropedicaBP+= 1;
         } 
         if(cliente.match(`OSASCO`)) {
            totalOsascoBP += 1;
         } 
         if(cliente.match(`CAJAMAR`)) {
            totalCajamarBP += 1;
         } 
         if(cliente.match(`UBERL`)) {
            totalUberlandiaBP += 1;
         }
         if(cliente.match(`CABO`)) {
            totalCSABP += 1;
         }  
    }
    if(valor.match(/LEITOR/) || valor.match(/LEITOR DE DADOS/) ||
      valor.match(/COLETOR DE DADOS/) || valor.match(/COLETOR/) ||
      valor.match(/IMPRESSORA/) ||  valor.match(/IMPRESSORA TÉRMICA/) || 
      valor.match(/TERMINAL DE CONSULTA/) || valor.match(/BUSCA/)) {
        
    }else{
        totalOutros += 1;
        if(cliente.match(`ITAPEVI`)) {
            totalItapeviOutro += 1;
         }
         if(cliente.match(`SEROP`) || cliente.match(`Serop`)) {
            totalSeropedicaOutro += 1;
         } 
         if(cliente.match(`OSASCO`)) {
            totalOsascoOutro += 1;
         } 
         if(cliente.match(`CAJAMAR`)) {
            totalCajamarOutro  += 1;
         } 
         if(cliente.match(`UBERL`)) {
            totalUberlandiaOutro += 1;
         }
         if(cliente.match(`CABO`)) {
            totalCSAOutro += 1;
         }  
    }
   }
}   

    function percentage(percent, total) {
        return ((percent/ total) * 100).toFixed(2)
    }

    totalPColetor = percentage(totalColetor, totalFinalizada);
    totalPLeitor = percentage(totalLeitor, totalFinalizada);
    totalPImpressora = percentage(totalImpressora, totalFinalizada);
    totalPBuscaPreco = percentage(totalBuscaPreco, totalFinalizada);
    totalPOutros = percentage(totalOutros, totalFinalizada); 

    
    for(var i = 0; i < AGUARDANDO_CHEGADA.length; i ++) { 
        var cliente = AGUARDANDO_CHEGADA[i].PessoaFantasia;
        var valor = AGUARDANDO_CHEGADA[i].NomeEquipamento;
    if(cliente.includes(`${usuario}`)) {        
    if(valor.match(/LEITOR DE DADOS/ || valor.match(/LEITOR/))) {
        totalLeitorAC += 1;    
    }
    if(valor.match(/COLETOR DE DADOS/ || valor.match(/COLETOR/))) {
        totalColetorAC += 1;    
    }
    if(valor.match(/IMPRESSORA/ || valor.match(/IMPRESSORA TÉRMICA/))) {
        totalImpressoraAC += 1;
    }
    if(valor.match(/TERMINAL DE CONSULTA/ || valor.match(/BUSCA/))) {
        totalBuscaPrecoAC += 1;
    }
    if(valor.match(/LEITOR/) || valor.match(/LEITOR/) || valor.match(/COLETOR DE DADOS/)
    || valor.match(/IMPRESSORA/) || valor.match(/COLETOR/) ||
    valor.match(/TERMINAL DE CONSULTA/)) {
        
    }else{
        totalOutrosAC += 1;
    }
    totalGeralAC += 1; 
   }
}  


    
    var totalAnual = jan+fev+mar+abr+mai+jun+jul+ago+set+out+nov+dez; 
    var tAAnterior = janA+fevA+marA+abrA+maiA+junA+julA+agoA+setA+outA+novA+dezA; 
      
    await res.render('index', {
    email, data,img, totalColetor, totalLeitor, totalImpressora, totalOutros, totalBuscaPreco,
    totalColetorAC, totalLeitorAC, totalImpressoraAC, totalOutrosAC, totalBuscaPrecoAC,totalGeralAC,
    totalPColetor, totalPLeitor, totalPImpressora, totalPBuscaPreco, totalPOutros,totalFinalizada,
    totalAguardandoChegada,totalAguardandoVistoria,totalEmVistoria, totalVistoriado,totalAguardandoAprovacao,
    totalAguardandoPecas,totalAprovado,totalEmManutencao,totalManutencaoConcluida,totalExpedicao,totalReprovado,
    jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez, 
    janA, fevA, marA, abrA, maiA, junA, julA, agoA, setA, outA, novA, dezA,tAAnterior,
    totalAnual, totalItapevi, totalSeropedica, totalOsasco,
    totalCajamar, totalUberlandia, totalCSA,
    totalItapeviColetor,
    totalSeropedicaColetor,
    totalOsascoColetor,
    totalCajamarColetor,
    totalUberlandiaColetor,
    totalCSAColetor,
    totalItapeviLeitor,
    totalSeropedicaLeitor,
    totalOsascoLeitor,
    totalCajamarLeitor,
    totalUberlandiaLeitor,
    totalCSALeitor,
    totalItapeviImpressora,
    totalSeropedicaImpressora,
    totalOsascoImpressora,
    totalCajamarImpressora,
    totalUberlandiaImpressora,
    totalCSAImpressora,
    totalItapeviBP,
    totalSeropedicaBP,
    totalOsascoBP,
    totalCajamarBP,
    totalUberlandiaBP,
    totalCSABP,
    totalItapeviOutro,
    totalSeropedicaOutro,
    totalOsascoOutro,
    totalCajamarOutro,
    totalUberlandiaOutro,
    totalCSAOutro,
    totalFinalizadaItapevi,
    totalFinalizadaOsasco,
    totalFinalizadaCajamar,
    totalFinalizadaSeropedica,
    totalFinalizadaUberlandia,
    totalFinalizadaCSA,
    totalAguardandoChegadaItapevi,
    totalAguardandoChegadaOsasco,
    totalAguardandoChegadaSeropedica,
    totalAguardandoChegadaCSA,
    totalAguardandoChegadaCajamar,
    totalAguardandoChegadaUberlandia,
    anoAnterior,
    anoAtual,
    ip, city, region   
});

}

dadosCtrl.renderContratos = (req,res) => {
    let email = req.user.email;
    var usuario =  req.user.cnpj_cpf;
    let img = req.user.img;
    res.render('contratos', {email, usuario, img, ip, cidade, regiao});
}



dadosCtrl.renderOS = async(req,res) => {
    let email = req.user.email;
    var usuario =  req.user.cnpj_cpf;
    let img = req.user.img;
    
    //Variaveis Totais
    var totalAguardandoChegada = 0;
    var totalAguardandoVistoria = 0;
    var totalEmVistoria = 0;
    var totalVistoriado = 0;
    var totalAguardandoAprovacao = 0;
    var totalAguardandoPecas = 0;
    var totalAprovado = 0;
    var totalEmManutencao = 0;
    var totalManutencaoConcluida = 0;
    var totalExpedicao = 0;
    var totalReprovado = 0;
    var totalFinalizada = 0; 

    var empresa = {dado: []}
    
    for(var i = 0; i <  AGUARDANDO_CHEGADA.length; i++) {
    let cliente = AGUARDANDO_CHEGADA[i].PessoaFantasia;
    if(cliente.includes(`${usuario}`)) {
        empresa.dado.push({
            os: AGUARDANDO_CHEGADA[i].OSID,
            dataEntrada: AGUARDANDO_CHEGADA[i].OSData,
            dataMovimento: AGUARDANDO_CHEGADA[i].DataFinalMovto,
            cliente: AGUARDANDO_CHEGADA[i].PessoaCnpjCpf,
            nome: AGUARDANDO_CHEGADA[i].PessoaFantasia,
            agente: AGUARDANDO_CHEGADA[i].AgenteNegNome,
            estagio: AGUARDANDO_CHEGADA[i].EstagioDescricao,
            ns: AGUARDANDO_CHEGADA[i].EquipamentoLTS,
            equipamento: AGUARDANDO_CHEGADA[i].NomeEquipamento,
            descricao: AGUARDANDO_CHEGADA[i].DescricaoTipoOS,
            valor: AGUARDANDO_CHEGADA[i].ValorTotal
            }); 
        totalAguardandoChegada += 1;          
        }
    }

    for(var i = 0; i < AGUARDANDO_VISTORIA.length; i++) {
        let cliente = AGUARDANDO_VISTORIA[i].PessoaFantasia;
        if(cliente.includes(`${usuario}`)) {
            empresa.dado.push({
                os: AGUARDANDO_VISTORIA[i].OSID,
                dataEntrada: AGUARDANDO_VISTORIA[i].OSData,
                dataMovimento: AGUARDANDO_VISTORIA[i].DataFinalMovto,
                cliente: AGUARDANDO_VISTORIA[i].PessoaCnpjCpf,
                nome: AGUARDANDO_VISTORIA[i].PessoaFantasia,
                agente: AGUARDANDO_VISTORIA[i].AgenteNegNome,
                estagio: AGUARDANDO_VISTORIA[i].EstagioDescricao,
                ns: AGUARDANDO_VISTORIA[i].EquipamentoLTS,
                equipamento: AGUARDANDO_VISTORIA[i].NomeEquipamento,
                descricao: AGUARDANDO_VISTORIA[i].DescricaoTipoOS,
                valor: AGUARDANDO_VISTORIA[i].ValorTotal
                }); 
        totalAguardandoVistoria += 1;              
        }
    }

    for(var i = 0; i < EM_VISTORIA.length; i++) {
        let cliente = EM_VISTORIA[i].PessoaFantasia;
        if(cliente.includes(`${usuario}`)) {
            empresa.dado.push({
                os: EM_VISTORIA[i].OSID,
                dataEntrada: EM_VISTORIA[i].OSData,
                dataMovimento: EM_VISTORIA[i].DataFinalMovto,
                cliente: EM_VISTORIA[i].PessoaCnpjCpf,
                nome: EM_VISTORIA[i].PessoaFantasia,
                agente: EM_VISTORIA[i].AgenteNegNome,
                estagio: EM_VISTORIA[i].EstagioDescricao,
                ns: EM_VISTORIA[i].EquipamentoLTS,
                equipamento: EM_VISTORIA[i].NomeEquipamento,
                descricao: EM_VISTORIA[i].DescricaoTipoOS,
                valor: EM_VISTORIA[i].ValorTotal
                });       
        totalEmVistoria += 1;        
        }
    }

    for(var i = 0; i < VISTORIADO.length; i++) {
        let cliente = VISTORIADO[i].PessoaFantasia;
        if(cliente.includes(`${usuario}`)) {
            empresa.dado.push({
                os: VISTORIADO[i].OSID,
                dataEntrada: VISTORIADO[i].OSData,
                dataMovimento: VISTORIADO[i].DataFinalMovto,
                cliente: VISTORIADO[i].PessoaCnpjCpf,
                nome: VISTORIADO[i].PessoaFantasia,
                agente: VISTORIADO[i].AgenteNegNome,
                estagio: VISTORIADO[i].EstagioDescricao,
                ns: VISTORIADO[i].EquipamentoLTS,
                equipamento: VISTORIADO[i].NomeEquipamento,
                descricao: VISTORIADO[i].DescricaoTipoOS,
                valor: VISTORIADO[i].ValorTotal
                });
        totalVistoriado += 1;               
        }
    }

    for(var i = 0; i < AGUARDANDO_APROVACAO.length; i++) {
        let cliente = AGUARDANDO_APROVACAO[i].PessoaFantasia;
        if(cliente.includes(`${usuario}`)) {
            empresa.dado.push({
                os: AGUARDANDO_APROVACAO[i].OSID,
                dataEntrada: AGUARDANDO_APROVACAO[i].OSData,
                dataMovimento: AGUARDANDO_APROVACAO[i].DataFinalMovto,
                cliente: AGUARDANDO_APROVACAO[i].PessoaCnpjCpf,
                nome: AGUARDANDO_APROVACAO[i].PessoaFantasia,
                agente: AGUARDANDO_APROVACAO[i].AgenteNegNome,
                estagio: AGUARDANDO_APROVACAO[i].EstagioDescricao,
                ns: AGUARDANDO_APROVACAO[i].EquipamentoLTS,
                equipamento: AGUARDANDO_APROVACAO[i].NomeEquipamento,
                descricao: AGUARDANDO_APROVACAO[i].DescricaoTipoOS,
                valor: AGUARDANDO_APROVACAO[i].ValorTotal
                });       
        totalAguardandoAprovacao += 1;
        }
    }

    for(var i = 0; i < AGUARDANDO_PECAS.length; i++) {
        let cliente = AGUARDANDO_PECAS[i].PessoaFantasia;
        if(cliente.includes(`${usuario}`)) {
            empresa.dado.push({
                os: AGUARDANDO_PECAS[i].OSID,
                dataEntrada: AGUARDANDO_PECAS[i].OSData,
                dataMovimento: AGUARDANDO_PECAS[i].DataFinalMovto,
                cliente: AGUARDANDO_PECAS[i].PessoaCnpjCpf,
                nome: AGUARDANDO_PECAS[i].PessoaFantasia,
                agente: AGUARDANDO_PECAS[i].AgenteNegNome,
                estagio: AGUARDANDO_PECAS[i].EstagioDescricao,
                ns: AGUARDANDO_PECAS[i].EquipamentoLTS,
                equipamento: AGUARDANDO_PECAS[i].NomeEquipamento,
                descricao: AGUARDANDO_PECAS[i].DescricaoTipoOS,
                valor: AGUARDANDO_PECAS[i].ValorTotal
                });
        totalAguardandoPecas += 1;               
        }
    }

    for(var i = 0; i < APROVADO.length; i++) {
        let cliente = APROVADO[i].PessoaFantasia;
        if(cliente.includes(`${usuario}`)) {
            empresa.dado.push({
                os: APROVADO[i].OSID,
                dataEntrada: APROVADO[i].OSData,
                dataMovimento: APROVADO[i].DataFinalMovto,
                cliente: APROVADO[i].PessoaCnpjCpf,
                nome: APROVADO[i].PessoaFantasia,
                agente: APROVADO[i].AgenteNegNome,
                estagio: APROVADO[i].EstagioDescricao,
                ns: APROVADO[i].EquipamentoLTS,
                equipamento: APROVADO[i].NomeEquipamento,
                descricao: APROVADO[i].DescricaoTipoOS,
                valor: APROVADO[i].ValorTotal
                });
        totalAprovado += 1;               
        }
    }

    for(var i = 0; i < EM_MANUTENCAO.length; i++) {
        let cliente = EM_MANUTENCAO[i].PessoaFantasia;
        if(cliente.includes(`${usuario}`)) {
            empresa.dado.push({
                os: EM_MANUTENCAO[i].OSID,
                dataEntrada: EM_MANUTENCAO[i].OSData,
                dataMovimento: EM_MANUTENCAO[i].DataFinalMovto,
                cliente: EM_MANUTENCAO[i].PessoaCnpjCpf,
                nome: EM_MANUTENCAO[i].PessoaFantasia,
                agente: EM_MANUTENCAO[i].AgenteNegNome,
                estagio: EM_MANUTENCAO[i].EstagioDescricao,
                ns: EM_MANUTENCAO[i].EquipamentoLTS,
                equipamento: EM_MANUTENCAO[i].NomeEquipamento,
                descricao: EM_MANUTENCAO[i].DescricaoTipoOS,
                valor: EM_MANUTENCAO[i].ValorTotal
                });       
        totalEmManutencao += 1;
        }
    }

    for(var i = 0; i < MANUTENCAO_CONCLUIDA.length; i++) {
        let cliente = MANUTENCAO_CONCLUIDA[i].PessoaFantasia;
        if(cliente.includes(`${usuario}`)) {
            empresa.dado.push({
                os: MANUTENCAO_CONCLUIDA[i].OSID,
                dataEntrada: MANUTENCAO_CONCLUIDA[i].OSData,
                dataMovimento: MANUTENCAO_CONCLUIDA[i].DataFinalMovto,
                cliente: MANUTENCAO_CONCLUIDA[i].PessoaCnpjCpf,
                nome: MANUTENCAO_CONCLUIDA[i].PessoaFantasia,
                agente: MANUTENCAO_CONCLUIDA[i].AgenteNegNome,
                estagio: MANUTENCAO_CONCLUIDA[i].EstagioDescricao,
                ns: MANUTENCAO_CONCLUIDA[i].EquipamentoLTS,
                equipamento: MANUTENCAO_CONCLUIDA[i].NomeEquipamento,
                descricao: MANUTENCAO_CONCLUIDA[i].DescricaoTipoOS,
                valor: MANUTENCAO_CONCLUIDA[i].ValorTotal
                });
        totalManutencaoConcluida += 1;               
        }
    }

    for(var i = 0; i < EXPEDICAO.length; i++) {
        let cliente = EXPEDICAO[i].PessoaFantasia;
        if(cliente.includes(`${usuario}`)) {
            empresa.dado.push({
                os: EXPEDICAO[i].OSID,
                dataEntrada: EXPEDICAO[i].OSData,
                dataMovimento: EXPEDICAO[i].DataFinalMovto,
                cliente: EXPEDICAO[i].PessoaCnpjCpf,
                nome: EXPEDICAO[i].PessoaFantasia,
                agente: EXPEDICAO[i].AgenteNegNome,
                estagio: EXPEDICAO[i].EstagioDescricao,
                ns: EXPEDICAO[i].EquipamentoLTS,
                equipamento: EXPEDICAO[i].NomeEquipamento,
                descricao: EXPEDICAO[i].DescricaoTipoOS,
                valor: EXPEDICAO[i].ValorTotal
                });
        totalExpedicao += 1;               
        }
    }

    for(var i = 0; i < REPROVADO.length; i++) {
        let cliente = REPROVADO[i].PessoaFantasia;
        if(cliente.includes(`${usuario}`)) {
            empresa.dado.push({
                os: REPROVADO[i].OSID,
                dataEntrada: REPROVADO[i].OSData,
                dataMovimento: REPROVADO[i].DataFinalMovto,
                cliente: REPROVADO[i].PessoaCnpjCpf,
                nome: REPROVADO[i].PessoaFantasia,
                agente: REPROVADO[i].AgenteNegNome,
                estagio: REPROVADO[i].EstagioDescricao,
                ns: REPROVADO[i].EquipamentoLTS,
                equipamento: REPROVADO[i].NomeEquipamento,
                descricao: REPROVADO[i].DescricaoTipoOS,
                valor: REPROVADO[i].ValorTotal
                });
        totalReprovado += 1;               
        }
    }

   
    await res.render('os', {empresa, email, img, ip, city, region });
}


dadosCtrl.renderAA = async(req,res) => {
    let email = req.user.email;
    let img = req.user.img;
    var usuario =  req.user.cnpj_cpf;
    var dados = {dado: []};   
     for(var i = 0; i < AGUARDANDO_APROVACAO.length; i++) {
        let cliente = AGUARDANDO_APROVACAO[i].PessoaFantasia;
        if(cliente.includes(`${usuario}`)) {
            dados.dado.push({
                os: AGUARDANDO_APROVACAO[i].OSID,
                dataEntrada: AGUARDANDO_APROVACAO[i].OSData,
                dataMovimento: AGUARDANDO_APROVACAO[i].DataFinalMovto,
                cliente: AGUARDANDO_APROVACAO[i].PessoaCnpjCpf,
                nome: AGUARDANDO_APROVACAO[i].PessoaFantasia,
                agente: AGUARDANDO_APROVACAO[i].AgenteNegNome,
                estagio: AGUARDANDO_APROVACAO[i].EstagioDescricao,
                ns: AGUARDANDO_APROVACAO[i].EquipamentoLTS,
                equipamento: AGUARDANDO_APROVACAO[i].NomeEquipamento,
                descricao: AGUARDANDO_APROVACAO[i].DescricaoTipoOS,
                valor: AGUARDANDO_APROVACAO[i].ValorTotal
                });       
        }
    }

    if(dados.dado.length != 0) {
        await res.render('aguardando_aprovacao', {email, dados, img,ip, city, region });
    }else{
        await res.render('aguardando_aprovacao', {email, img,ip, city, region, text: 'Não existem dados'}); 
    }      
}

dadosCtrl.renderAC = async(req,res) => {
    let email = req.user.email;
    let img = req.user.img;
    var usuario =  req.user.cnpj_cpf;
    var dados = {dado: []};
        for(var i = 0; i < AGUARDANDO_CHEGADA.length; i++) {
            let cliente = AGUARDANDO_CHEGADA[i].PessoaFantasia;
            if(cliente.includes(`${usuario}`)) {
                dados.dado.push({
                    os: AGUARDANDO_CHEGADA[i].OSID,
                    dataEntrada: AGUARDANDO_CHEGADA[i].OSData,
                    dataMovimento: AGUARDANDO_CHEGADA[i].DataFinalMovto,
                    cliente: AGUARDANDO_CHEGADA[i].PessoaCnpjCpf,
                    nome: AGUARDANDO_CHEGADA[i].PessoaFantasia,
                    agente: AGUARDANDO_CHEGADA[i].AgenteNegNome,
                    estagio: AGUARDANDO_CHEGADA[i].EstagioDescricao,
                    ns: AGUARDANDO_CHEGADA[i].EquipamentoLTS,
                    equipamento: AGUARDANDO_CHEGADA[i].NomeEquipamento,
                    descricao: AGUARDANDO_CHEGADA[i].DescricaoTipoOS,
                    valor: AGUARDANDO_CHEGADA[i].ValorTotal
                    });       
             }
        }
        
        if(dados.dado.length != 0) {
            await  res.render('aguardando_chegada', {email,img, dados}); 
        }else{
            await  res.render('aguardando_chegada', {email,img,ip, city, region, text: 'Não existem dados !'});
        }   
}

dadosCtrl.renderAPS = async(req,res) => {
    let email = req.user.email;
    let img = req.user.img;
    var usuario =  req.user.cnpj_cpf;
    var dados = {dado: []};
    var texto = "Não existem dados";
   for(var i = 0; i < AGUARDANDO_PECAS.length; i++) {
            let cliente = AGUARDANDO_PECAS[i].PessoaFantasia;
            if(cliente.includes(`${usuario}`)) {
                dados.dado.push({
                    os: AGUARDANDO_PECAS[i].OSID,
                    dataEntrada: AGUARDANDO_PECAS[i].OSData,
                    dataMovimento: AGUARDANDO_PECAS[i].DataFinalMovto,
                    cliente: AGUARDANDO_PECAS[i].PessoaCnpjCpf,
                    nome: AGUARDANDO_PECAS[i].PessoaFantasia,
                    agente: AGUARDANDO_PECAS[i].AgenteNegNome,
                    estagio: AGUARDANDO_PECAS[i].EstagioDescricao,
                    ns: AGUARDANDO_PECAS[i].EquipamentoLTS,
                    equipamento: AGUARDANDO_PECAS[i].NomeEquipamento,
                    descricao: AGUARDANDO_PECAS[i].DescricaoTipoOS,
                    valor: AGUARDANDO_PECAS[i].ValorTotal
                    });       
             }
        }

        if(dados.dado.length != 0) {
            await  res.render('aguardando_pecas', {email,img, dados,ip, city, region}); 
        }else{
            await res.render('aguardando_pecas', {email,img, texto, ip, city, region}); 
        }
}

dadosCtrl.renderAV = async(req,res) => {
    let email = req.user.email;
    let img = req.user.img;
    var usuario =  req.user.cnpj_cpf;
    var dados = {dado: []};
    var texto = "Não existem dados";    
        for(var i = 0; i < AGUARDANDO_VISTORIA.length; i++) {
            let cliente = AGUARDANDO_VISTORIA[i].PessoaFantasia;
            if(cliente.includes(`${usuario}`)) {
                dados.dado.push({
                    os: AGUARDANDO_VISTORIA[i].OSID,
                    dataEntrada: AGUARDANDO_VISTORIA[i].OSData,
                    dataMovimento: AGUARDANDO_VISTORIA[i].DataFinalMovto,
                    cliente: AGUARDANDO_VISTORIA[i].PessoaCnpjCpf,
                    nome: AGUARDANDO_VISTORIA[i].PessoaFantasia,
                    agente: AGUARDANDO_VISTORIA[i].AgenteNegNome,
                    estagio: AGUARDANDO_VISTORIA[i].EstagioDescricao,
                    ns: AGUARDANDO_VISTORIA[i].EquipamentoLTS,
                    equipamento: AGUARDANDO_VISTORIA[i].NomeEquipamento,
                    descricao: AGUARDANDO_VISTORIA[i].DescricaoTipoOS,
                    valor: AGUARDANDO_VISTORIA[i].ValorTotal
                    });       
             }
        }
        if(dados.dado.length != 0) {
        await  res.render('aguardando_vistoria', {email,img, dados, ip, city, region });  
        }else{
        await res.render('aguardando_vistoria', {email,img, texto, ip, city, region}); 
    }
}
    

dadosCtrl.renderEE = async(req,res) => {
    let email = req.user.email;
    let img = req.user.img;
    var usuario =  req.user.cnpj_cpf;
    var dados = {dado: []};    
        for(var i = 0; i < EXPEDICAO.length; i++) {
            let cliente = EXPEDICAO[i].PessoaFantasia;
            if(cliente.includes(`${usuario}`)) {
                dados.dado.push({
                    os: EXPEDICAO[i].OSID,
                    dataEntrada: EXPEDICAO[i].OSData,
                    dataMovimento: EXPEDICAO[i].DataFinalMovto,
                    cliente: EXPEDICAO[i].PessoaCnpjCpf,
                    nome: EXPEDICAO[i].PessoaFantasia,
                    agente: EXPEDICAO[i].AgenteNegNome,
                    estagio: EXPEDICAO[i].EstagioDescricao,
                    ns: EXPEDICAO[i].EquipamentoLTS,
                    equipamento: EXPEDICAO[i].NomeEquipamento,
                    descricao: EXPEDICAO[i].DescricaoTipoOS,
                    valor: EXPEDICAO[i].ValorTotal
                    });           
                }
            }


        if(dados.dado.length != 0) {
            await  res.render('em_expedicao', {email,img, dados, ip, city, region});  
        }else{
            await res.render('em_expedicao', {email,img,ip, city, region, text: 'Não existem dados'});                
    }       
}


dadosCtrl.renderEM = async(req,res) => {
    let email = req.user.email;
    let img = req.user.img;
    var usuario =  req.user.cnpj_cpf;
    var dados = {dado: []}; 
    
        for(var i = 0; i < EM_MANUTENCAO.length; i++) {
            let cliente = EM_MANUTENCAO[i].PessoaFantasia;
            if(cliente.includes(`${usuario}`)) {
                dados.dado.push({
                    os: EM_MANUTENCAO[i].OSID,
                    dataEntrada: EM_MANUTENCAO[i].OSData,
                    dataMovimento: EM_MANUTENCAO[i].DataFinalMovto,
                    cliente: EM_MANUTENCAO[i].PessoaCnpjCpf,
                    nome: EM_MANUTENCAO[i].PessoaFantasia,
                    agente: EM_MANUTENCAO[i].AgenteNegNome,
                    estagio: EM_MANUTENCAO[i].EstagioDescricao,
                    ns: EM_MANUTENCAO[i].EquipamentoLTS,
                    equipamento: EM_MANUTENCAO[i].NomeEquipamento,
                    descricao: EM_MANUTENCAO[i].DescricaoTipoOS,
                    valor: EM_MANUTENCAO[i].ValorTotal
                    });       
             }
        }

        if(dados.dado.length != 0) {
            await  res.render('em_manutencao', {email,img, dados, ip, city, region });
        }else{
            await res.render('em_manutencao', {email,img, ip, city, region, text: 'Não existem dados !'}); 
        }          
}

dadosCtrl.renderF = async(req,res) => {
    let email = req.user.email;
    let img = req.user.img;
    var usuario =  req.user.cnpj_cpf;
    dados = {dado: []};

    console.log(FINALIZADA);

    for(var i = 0; i < FINALIZADA.length; i++) {
            let cliente = FINALIZADA[i].PessoaFantasia;
            if(cliente.includes(`${usuario}`)) {
                dados.dado.push({
                    os: FINALIZADA[i].OSID,
                    dataEntrada: FINALIZADA[i].OSData,
                    dataMovimento: FINALIZADA[i].DataFinalMovto,
                    cliente: FINALIZADA[i].PessoaCnpjCpf,
                    nome: FINALIZADA[i].PessoaFantasia,
                    agente: FINALIZADA[i].AgenteNegNome,
                    estagio: FINALIZADA[i].EstagioDescricao,
                    ns: FINALIZADA[i].EquipamentoLTS,
                    equipamento: FINALIZADA[i].NomeEquipamento,
                    descricao: FINALIZADA[i].DescricaoTipoOS,
                    valor: FINALIZADA[i].ValorTotal
                    });       
             }
        }

   
       
        if(dados.dado.length != 0) {     
            await  res.render('finalizadas', {email,img, dados, ip, city, region });    
        }else {
            await res.render('finalizadas', {email,img, ip, city, region, text: 'Não existem dados !'}); 
        }    
}         

       
dadosCtrl.renderMC = async(req,res) => {
    let email = req.user.email;
    let img = req.user.img;
    var usuario =  req.user.cnpj_cpf;
    var dados = {dado: []};   
    
    for(var i = 0; i < MANUTENCAO_CONCLUIDA.length; i++) {
            let cliente = MANUTENCAO_CONCLUIDA[i].PessoaFantasia;
            if(cliente.includes(`${usuario}`)) {
                dados.dado.push({
                    os: MANUTENCAO_CONCLUIDA[i].OSID,
                    dataEntrada: MANUTENCAO_CONCLUIDA[i].OSData,
                    dataMovimento: MANUTENCAO_CONCLUIDA[i].DataFinalMovto,
                    cliente: MANUTENCAO_CONCLUIDA[i].PessoaCnpjCpf,
                    nome: MANUTENCAO_CONCLUIDA[i].PessoaFantasia,
                    agente: MANUTENCAO_CONCLUIDA[i].AgenteNegNome,
                    estagio: MANUTENCAO_CONCLUIDA[i].EstagioDescricao,
                    ns: MANUTENCAO_CONCLUIDA[i].EquipamentoLTS,
                    equipamento: MANUTENCAO_CONCLUIDA[i].NomeEquipamento,
                    descricao: MANUTENCAO_CONCLUIDA[i].DescricaoTipoOS,
                    valor: MANUTENCAO_CONCLUIDA[i].ValorTotal
                    });       
             }
        }
        if(dados.dado.length != 0) {
            await  res.render('manutencao_concluida', {email,img, dados, ip, city, region}); 
        }else{
            await res.render('manutencao_concluida', {email,img,ip, city, region,text: 'Não existem dados !'});
        }           
}

dadosCtrl.renderOA = async(req,res) => {
    let email = req.user.email;
    let img = req.user.img;
    var usuario =  req.user.cnpj_cpf;
    var dados = {dado: []};
    for(var i = 0; i < APROVADO.length; i++) {
            let cliente = APROVADO[i].PessoaFantasia;
            if(cliente.includes(`${usuario}`)) {
                dados.dado.push({
                    os: APROVADO[i].OSID,
                    dataEntrada: APROVADO[i].OSData,
                    dataMovimento: APROVADO[i].DataFinalMovto,
                    cliente: APROVADO[i].PessoaCnpjCpf,
                    nome: APROVADO[i].PessoaFantasia,
                    agente: APROVADO[i].AgenteNegNome,
                    estagio: APROVADO[i].EstagioDescricao,
                    ns: APROVADO[i].EquipamentoLTS,
                    equipamento: APROVADO[i].NomeEquipamento,
                    descricao: APROVADO[i].DescricaoTipoOS,
                    valor: APROVADO[i].ValorTotal
                    });       
             }
        }
        if(dados.dado.length != 0) {
            await  res.render('ordens_aprovadas', {email,img, dados, ip, city, region  });
        }else{
            await res.render('ordens_aprovadas', {email,img, ip, city, region, text: 'Não existem dados !'});
        }
}
        


dadosCtrl.renderOR = async(req,res) => {
    let email = req.user.email;
    let img = req.user.img;
    var usuario =  req.user.cnpj_cpf;
    var dados = {dado: []};    
        for(var i = 0; i < REPROVADO.length; i++) {
            let cliente = REPROVADO[i].PessoaFantasia;
            if(cliente.includes(`${usuario}`)) {
                dados.dado.push({
                    os: REPROVADO[i].OSID,
                    dataEntrada: REPROVADO[i].OSData,
                    dataMovimento: REPROVADO[i].DataFinalMovto,
                    cliente: REPROVADO[i].PessoaCnpjCpf,
                    nome: REPROVADO[i].PessoaFantasia,
                    agente: REPROVADO[i].AgenteNegNome,
                    estagio: REPROVADO[i].EstagioDescricao,
                    ns: REPROVADO[i].EquipamentoLTS,
                    equipamento: REPROVADO[i].NomeEquipamento,
                    descricao: REPROVADO[i].DescricaoTipoOS,
                    valor: REPROVADO[i].ValorTotal
                    });       
             }
        }
        if(dados.dado.length != 0) {
            await  res.render('ordens_reprovadas', {email,img, dados, ip, city, region}); 
        }else{
            await res.render('ordens_reprovadas', {email,img,ip, city, region, text: 'Não existem dados !'}); 
        }            
}

dadosCtrl.renderV = async(req,res) => {
    let email = req.user.email;
    let img = req.user.img;
    var usuario =  req.user.cnpj_cpf;
    var dados = {dado: []};
        for(var i = 0; i < VISTORIADO.length; i++) {
            let cliente = VISTORIADO[i].PessoaCnpjCpf;
            if(cliente.includes(`${usuario}`)) {
                dados.dado.push({
                    os: VISTORIADO[i].OSID,
                    dataEntrada: VISTORIADO[i].OSData,
                    dataMovimento: VISTORIADO[i].DataFinalMovto,
                    cliente: VISTORIADO[i].PessoaCnpjCpf,
                    nome: VISTORIADO[i].PessoaFantasia,
                    agente: VISTORIADO[i].AgenteNegNome,
                    estagio: VISTORIADO[i].EstagioDescricao,
                    ns: VISTORIADO[i].EquipamentoLTS,
                    equipamento: VISTORIADO[i].NomeEquipamento,
                    descricao: VISTORIADO[i].DescricaoTipoOS,
                    valor: VISTORIADO[i].ValorTotal
                    });       
             }
        }
        if(dados.dado.length != 0) {
            await  res.render('vistoriados', {email,img, dados, ip, city, region}); 
        }else {
            await res.render('vistoriados', {email,img, ip, city, region, text: 'Não existem dados !'});
        }            
}



 //Funções

 formataData = async (dataItem) => {
    for (var i = 0; i < dataItem.length; i++) {
        var dataA = dataItem[i];
        dataF = await dataA.OSData.replace(/(\d*)-(\d*)-(\d*).*/, '$3-$2-$1');
        dataA.OSData = await dataF;
    }

    for (var i = 0; i < dataItem.length; i++) {
        var dataA = dataItem[i];
        dataF = await dataA.DataFinalMovto.replace(/(\d*)-(\d*)-(\d*).*/, '$3-$2-$1');
        dataA.DataFinalMovto = await dataF;
    }
}


 formataValor = async (dados) => {
    for (var i = 0; i < dados.length; i++) {
        var valor = dados[i];        
        if(valor.ValorTotal != null && valor.ValorTotal != "0") {
            var valorFormatado = await valor.ValorTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            valor.ValorTotal = await valorFormatado;           
        }else{
            
        }            
    }
 }

 //Funções 
sortJSON = (item) => {
    return function(a, b) {
        if (a[item] < b[item])
            return 1;
        else if (a[item] > b[item])
            return -1;
        return 0;
    }
}


module.exports = dadosCtrl;
