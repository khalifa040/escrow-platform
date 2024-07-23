# Escrow Platform

An escrow platform is a secure and trustless system that holds and regulates the exchange of  tokens, or between two or more parties. The platform ensures that the tokens are only released when predetermined conditions are met (seller received traditional currency), providing a safe and reliable way to facilitate transactions.

## Key Features

- *Secure Holding*: The platform securely holds the tokens in escrow until the seller received the specified amount of traditional currency from the buyer.
- *Conditional Release*: tokens are only released when the buyer sent the traditional currency and inform.
- *Trustless*: The platform operates without the need for trusted intermediaries.
- *Secure and Transparent*: The platform ensures a secure and transparent transaction process.

## Benefits

- *Security*: Ensures the safe exchange of valuable items.
- *Trust*: Eliminates the need for trusted intermediaries.
- *Efficiency*: Streamlines the transaction process.
- *Transparency*: Provides a clear and transparent transaction record.

Now that we've covered the key aspects of the escrow platform, it's time to write the code that will make it work. Below is the implementation in PHP programming language and JavaScript.



```php
// Seller Insert ad into database

mysqli_query($conn, "INSERT INTO ads (buyer_wallet_address, amount, seller_confirmed_payment_escrow, buyer_payment_status, seller_confirmed_recieved_cash, escrow_status, buyer_pending) VALUES ('', $amount, 'pending', 'pending', 'pending', 'pending', 'no')");

// Send request to payment API to send the tokens to escrow account and update the the column 'seller_confirmed_payment_escrow' to 'confirmed' 

// Buyer updates ad with their wallet address and buyer pending to yes, showing their interest, so the ads should not be displayed to other buyers.

$buyerWalletAddress = 'buyer_wallet_address';
mysqli_query($conn, "UPDATE ads SET buyer_wallet_address='$buyerWalletAddress', buyer_pending='yes' WHERE id=$adId");


// Buyer pays and updates the ad with their payment status
mysqli_query($conn, "UPDATE ads SET buyer_payment_status='paid' WHERE id=$adId");

This code updates the ad with the buyer's payment status, indicating that they have made the payment.


Now, the seller needs to confirm receipt of cash and update the `seller_confirmed_recieved_cash` column. Once confirmed, the tokens can be released from escrow to the buyer's wallet address.


// Seller confirms receipt of cash
mysqli_query($conn, "UPDATE ads SET seller_confirmed_recieved_cash='confirmed' WHERE id=$adId");

// Release tokens from escrow to buyer's wallet address

// Seller confirms receipt of cash
mysqli_query($conn, "UPDATE ads SET seller_confirmed_recieved_cash='confirmed' WHERE id=$adId");

// Send request to payment API to release tokens from escrow
$paymentApiUrl = '(link unavailable)';
$paymentApiData = array(
    'ad_id' => $adId,
    'amount' => $amount,
    'buyer_wallet_address' => $buyerWalletAddress
);

$ch = curl_init($paymentApiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($paymentApiData));
$response = curl_exec($ch);
curl_close($ch);

// Wait for payment API response
if ($response == 'success') {
    // Update escrow status to "filled"
    mysqli_query($conn, "UPDATE ads SET escrow_status='filled' WHERE id=$adId");
} else {
    // Handle payment failure
}
```

This code sends a request to the payment API to release the tokens from escrow, and if the response is successful, updates the `escrow_status` to "filled".
