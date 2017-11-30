---
title: "Bash"
cover: "/logos/logo-1024.png"
category: "bash"
tags:

   - linux
   - bash

date: "11/26/2017"
---

##### Table of Contents

[Terminal](#terminal)

<a name="terminal"/>

## Terminal

General tips and `~/.bashrc` functions and settings to make the Linux experience better.

### Name terminal tabs

I found this workaround in [this Stack Exchange answer](https://unix.stackexchange.com/a/186167/166226).

Insert the below function into `~/.bashrc`. Open a new terminal tab with `Ctrl` + `Shift` + `t` and type `set-title <some terminal title>`.

``` bash
   function set-title() {
      if [[ -z "$ORIG" ]]; then
         ORIG=$PS1
      fi
      TITLE="\[\e]2;$*\a\]"
      PS1=${ORIG}${TITLE}
   }
```

## Bash Tips

``` bash
   # Printing out computer hardware to .html file
   $ sudo lshw -html

   # Print PCI hardware
   $ lspci -nn

   # USB hardware
   $ lsusb

   # Turn off wifi Power management
   $ sudo iwconfig <interface name (e.g. wlan0)> power off

   # List modules
   $ lsmod

   # Kill radio signals ( check on this)
   $ rfkill

   # List channels available for device
   $ iwlist chan

   # Scan channels
   $ iwlist scan
```

## File/Folder Permissions

Permissions for files and folders are grouped in three different sections; `user`, `group` and `other`. To set permissions for each, use the ``chmod`` or \"change mode\" command.

``` bash

   # add -R to modify recursively
   $ sudo chmod u=rwx,g=rx,o=r <myfile>
```

``` bash

   # zip
   $ tar -czvf <archive-to-create.tar.gz> <folder-to-compress> --exclude="*.pdf"

   # unzip
   $ tar -xzvf <file-to-extract.tar.gz> -C <folder-to-extract-to>
```

## Count Output

To count various things in a file or output you can use `wc`.

``` bash

   # count lines of output
   $ <command-with-output> | wc -l
```

## Storage

To list memory used by various drives and folders

``` bash

   # list storage
   $ du -h
```

Clean up filesystem

``` bash

   $ sudo apt-get clean
```

## Network

[nmap cheat sheet](https://highon.coffee/blog/nmap-cheat-sheet/)

Setting up network `ssid` and `psk` can be done in the `/etc/wpa_supplicant/wpa_supplicant.conf` file.

You can also use `sudo ifquery <interface>` to find where the interface is getting it's configuration. Here is an example response.

``` bash

   $ wpa-conf: /etc/wpa_supplicant/wpa_supplicant.conf
```

There are a lot of other options like setting priority of networks and naming that can be found [on the wiki here](https://wiki.archlinux.org/index.php/WPA_supplicant)

``` bash

   # Mandatory
   network={
      ssid="NETWORK_SSID"
      psk="PASSWORD"
   }
```

### Predictable Network Names

This is the naming system used when you see more complex names for interface devices than `wlan0`.

List `PCI` interfaces

``` bash
   $ lspci
```

### Change MAC Address

Bring card down

``` bash
   $ ifconfig <interface> down
```

Change the address to any octet

``` bash
   $ ifconfig <interface> hw ether dd:dd:dd:dd:dd
```

Bring it back up

``` bash
   $ ifconfig <interface> up
```

### Restart Network

Using wlan0 as an example.

Turn off

``` bash
   $ sudo ifdown wlan0
```


Turn on

``` bash
   $ sudo ifup wlan0
```

Restart network manager entirely. Setting an interface to monitor mode will require this to get the wifi back up.

``` bash
   $ sudo network-manager restart
```

## Ubuntu *(and other distros)*

Check the version of distro

``` bash
   $ lsb_release -a
```

For `Ubuntu 17.04` the mouse speed doesn't respond to the normal settings interface [but here is the best fix](https://askubuntu.com/questions/205676/how-to-change-mouse-speed-sensitivity)

### Install Wireshark

Update PPA to latest stable version

``` bash

   $ sudo add-apt-repository ppa:wireshark-dev/stable
```

Allow superuser to run Wireshark when it asks during installation.

Integrate new changes

``` bash

   $ sudo apt-get update
```

Install

``` bash

   $ sudo apt-get install wireshark
```

If you selected no initially and want to change it later, run

``` bash
   $ sudo dpkg-reconfigure wireshark-common
```

# Bash Scripting

Use the backtick ` \`  character to output to a variable rather than the console

``` bash

   var_one=`cat ls | grep .txt`
```

Installing an array of packages

``` bash
   package_list=(
      package1
      packageN
   )

   # The @ destructures the array members
   sudo apt-get -y install ${package_list[@]}
```

Commands that depend on previous commands completing successfully

``` bash

   # In terminal
   command1 && command2 && command3

   # In script
   # Backslash lets bash know these lines are one command
   command1 \
   && command 2 \
   && command 3
```

Run commands regardless of previous commands success or failure

``` bash

   # In terminal
   command1; command2; command3

   # In script
   # Just put each on it's own line
   command1
   command2
   command3
```

## Loops

``` bash

   some_arr=(
      "thing1"
      "thingN"
   )

   for i in "${some_arr[@]}"
   do
      echo $i
   done
```

## Users

Return user

``` bash

   $ echo $(whoami)
```
