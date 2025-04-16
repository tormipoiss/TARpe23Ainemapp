using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace BitcoinKälkulätorTormiLaane
{
    public partial class Form1: Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void label4_Click(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (currencySelector.SelectedItem == null ||
                (currencySelector.SelectedItem.ToString() != "USD" &&
                 currencySelector.SelectedItem.ToString() != "GBP" &&
                 currencySelector.SelectedItem.ToString() != "EUR" &&
                 currencySelector.SelectedItem.ToString() != "EEK"))
            {
                MessageBox.Show("Error, please choose valid currency");
            }
            else if (bitcoinAmountInput.Text == "" || bitcoinAmountInput.Text == null || !float.TryParse(bitcoinAmountInput.Text, out float bitcoinAmount))
            {
                MessageBox.Show("Error, please enter bitcoin amount in numbers");
            }
            else if (currencySelector.SelectedItem.ToString() == "USD")
            {
                resultLabel.Visible = true;
                tulemusLabel.Visible = true;
                BitcoinRates newbitcoinrate = GetRates();
                float result = float.Parse(bitcoinAmountInput.Text) * (float)newbitcoinrate.Data.BTCUSD.VALUE;
                resultLabel.Text = $"{result} dollareis";
            }
            else if (currencySelector.SelectedItem.ToString() == "GBP")
            {
                resultLabel.Visible = true;
                tulemusLabel.Visible = true;
                BitcoinRates newbitcoinrate = GetRates();
                float result = float.Parse(bitcoinAmountInput.Text) * (float)newbitcoinrate.Data.BTCGBP.VALUE;
                resultLabel.Text = $"{result} naelades";
            }
            else if (currencySelector.SelectedItem.ToString() == "EUR")
            {
                resultLabel.Visible = true;
                tulemusLabel.Visible = true;
                BitcoinRates newbitcoinrate = GetRates();
                float result = float.Parse(bitcoinAmountInput.Text) * (float)newbitcoinrate.Data.BTCEUR.VALUE;
                resultLabel.Text = $"{result} eurodes";
            }
            else
            {
                resultLabel.Visible = true;
                tulemusLabel.Visible = true;
                BitcoinRates newbitcoinrate = GetRates();
                float result = float.Parse(bitcoinAmountInput.Text) * (float)newbitcoinrate.Data.BTCEUR.VALUE * (float)15.6466;
                resultLabel.Text = $"{result} kroonides";
            }
        }

        public static BitcoinRates GetRates()
        {
            string url = "https://data-api.coindesk.com/index/cc/v1/latest/tick?market=cadli&instruments=BTC-USD,BTC-EUR,BTC-GBP&apply_mapping=true&groups=VALUE";
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
            request.Method = "GET";

            var webResponse = request.GetResponse();
            var webStream = webResponse.GetResponseStream();

            BitcoinRates bitcoin;
            using (var responseReader = new StreamReader(webStream))
            {
                var data = responseReader.ReadToEnd();
                bitcoin = JsonConvert.DeserializeObject<BitcoinRates>(data);
            }
            return bitcoin;
        }
    }
}
