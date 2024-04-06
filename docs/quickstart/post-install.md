---
id: post-install
title: Post Install
---
> **_NOTE:_**   **Use your fav text editor (vi, vim, nano, NvChad, geany, etc... ).**

for `PGP signature` error or `invalid or corrupted package`

```bash
sudo pacman-key --populate
```

Not resolved yet?
Ok, try this

```bash
yay -Syy archlinux-keyring
```

<details>
   <summary><h3> for Predator <code>v2022.11</code> Release</h3></summary>

   now `Predator-Sense-systemd-git` pkg is updated, renamed to `Predator-Sense-CLI`
   and added new pkg `Predator-Sense-GUI` which is The GUI implementation of Predator Sense CLI app.

   to install new PKGs, you need to run the 2 commands below

   ```bash
   remove Predator-Sense-systemd-git
   install exodia-predator-apps
   ```
   then **reboot** the machine

   to install grub theme 

   ```bash
   sudo cp -r /usr/share/grub/themes/exodia/ /boot/grub/themes/
   sudo grub-mkconfig -o /boot/grub/grub.cfg
   ```

</details>

<details>
   <summary><h3> for <code>v2022.11</code> Release</h3></summary>

   to install grub theme 

   ```bash
   sudo cp -r /usr/share/grub/themes/exodia/ /boot/grub/themes/
   sudo grub-mkconfig -o /boot/grub/grub.cfg
   ```

</details>

<details>
   <summary><h3> for <code>v2022.09</code> Release (exodia-home-2022.09.20-x86_64.iso) </h3></summary>


#### removed the `exodia-wireless-tools-repo ` and `exodia-wireless-extra-tools-repo` Repos
#### Replaced with `Exodia-PenTest-Repo`, as I'm working on a new release, Big updates coming

remove old Repos, adde new Repos in `/etc/pacman.conf`

> **_ONLY:_**   **if you use `v2022.09` Release `exodia-home-2022.09.20-x86_64.iso`.**

```
## Core packages repo ##
[exodia-repo]
SigLevel = Optional TrustAll
Server = https://exodia-os.github.io/$repo/$arch

## PenTest packages repo ##
[Exodia-PenTest-Repo]
SigLevel = Optional TrustAll
Server = https://exodia-os.github.io/$repo/$arch

## Community Repo ##
[exodia-community-repo]
SigLevel = Optional TrustAll
Server = https://exodia-os.github.io/$repo/$arch

```

### update 
```bash
update
```

### Fix Rofi 
rofi may not work after installation

open terminal <kbd>mod + Return</kbd>
```bash
nvim .config/bspwm/bspwmrc
```
then add
```
# Fix Rofi 
export LC_ALL="en_US.UTF-8"
```

<!-- 

```bash
sudo vim /etc/locale.conf
```
then add
```
LANG=en_US.UTF-8
LC_ADDRESS=en_US.UTF-8
LC_IDENTIFICATION=en_US.UTF-8
LC_MEASUREMENT=en_US.UTF-8
LC_MONETARY=en_US.UTF-8
LC_NAME=en_US.UTF-8
LC_NUMERIC=en_US.UTF-8
LC_PAPER=en_US.UTF-8
LC_TELEPHONE=en_US.UTF-8
LC_TIME=en_US.UTF-8
```

 -->

### Fix grub theme
GRUB theme may not work after installation

![GRUB](/img/post-install/grub-1.png)

open terminal <kbd>mod + Return</kbd>
```bash
install exodia-grub-theme
```

![GRUB](/img/post-install/grub-2.png)

### add Custom Menus to GRUB
open terminal <kbd>mod + Return</kbd>

```bash
sudo vim /etc/grub.d/40_custom
```

 then add

```bash
menuentry "Reboot" {
      reboot

}

menuentry "Shut Down" {
      halt

}
```

and update GRUB 
```bash
sudo grub-mkconfig -o /boot/grub/grub.cfg
```
 
![GRUB](/img/post-install/grub-3.png)

as you see `Shut Down` & `Reboot` Menus added


</details>
